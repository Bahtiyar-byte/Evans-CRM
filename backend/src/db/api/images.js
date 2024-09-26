const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ImagesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const images = await db.images.create(
      {
        id: data.id || undefined,

        Name: data.Name || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await images.setRelated_job(data.related_job || null, {
      transaction,
    });

    await images.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.images.getTableName(),
        belongsToColumn: 'image',
        belongsToId: images.id,
      },
      data.image,
      options,
    );

    return images;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const imagesData = data.map((item, index) => ({
      id: item.id || undefined,

      Name: item.Name || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const images = await db.images.bulkCreate(imagesData, { transaction });

    // For each item created, replace relation files

    for (let i = 0; i < images.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.images.getTableName(),
          belongsToColumn: 'image',
          belongsToId: images[i].id,
        },
        data[i].image,
        options,
      );
    }

    return images;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const images = await db.images.findByPk(id, {}, { transaction });

    await images.update(
      {
        Name: data.Name || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await images.setRelated_job(data.related_job || null, {
      transaction,
    });

    await images.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.images.getTableName(),
        belongsToColumn: 'image',
        belongsToId: images.id,
      },
      data.image,
      options,
    );

    return images;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const images = await db.images.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of images) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of images) {
        await record.destroy({ transaction });
      }
    });

    return images;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const images = await db.images.findByPk(id, options);

    await images.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await images.destroy({
      transaction,
    });

    return images;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const images = await db.images.findOne({ where }, { transaction });

    if (!images) {
      return images;
    }

    const output = images.get({ plain: true });

    output.image = await images.getImage({
      transaction,
    });

    output.related_job = await images.getRelated_job({
      transaction,
    });

    output.related_contact = await images.getRelated_contact({
      transaction,
    });

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.jobs,
        as: 'related_job',
      },

      {
        model: db.contacts,
        as: 'related_contact',
      },

      {
        model: db.file,
        as: 'image',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.Name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('images', 'Name', filter.Name),
        };
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.related_job) {
        var listItems = filter.related_job.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_jobId: { [Op.or]: listItems },
        };
      }

      if (filter.related_contact) {
        var listItems = filter.related_contact.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_contactId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.images.count({
            where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.images.findAndCountAll({
          where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('images', 'Name', query),
        ],
      };
    }

    const records = await db.images.findAll({
      attributes: ['id', 'Name'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['Name', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.Name,
    }));
  }
};
