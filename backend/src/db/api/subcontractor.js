const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class SubcontractorDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const subcontractor = await db.subcontractor.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        first_name: data.first_name || null,
        last_name: data.last_name || null,
        address: data.address || null,
        phone: data.phone || null,
        mobile_phone: data.mobile_phone || null,
        entity_name: data.entity_name || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await subcontractor.setRelated_documents(data.related_documents || [], {
      transaction,
    });

    return subcontractor;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const subcontractorData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      first_name: item.first_name || null,
      last_name: item.last_name || null,
      address: item.address || null,
      phone: item.phone || null,
      mobile_phone: item.mobile_phone || null,
      entity_name: item.entity_name || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const subcontractor = await db.subcontractor.bulkCreate(subcontractorData, {
      transaction,
    });

    // For each item created, replace relation files

    return subcontractor;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const subcontractor = await db.subcontractor.findByPk(
      id,
      {},
      { transaction },
    );

    await subcontractor.update(
      {
        name: data.name || null,
        first_name: data.first_name || null,
        last_name: data.last_name || null,
        address: data.address || null,
        phone: data.phone || null,
        mobile_phone: data.mobile_phone || null,
        entity_name: data.entity_name || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await subcontractor.setRelated_documents(data.related_documents || [], {
      transaction,
    });

    return subcontractor;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const subcontractor = await db.subcontractor.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of subcontractor) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of subcontractor) {
        await record.destroy({ transaction });
      }
    });

    return subcontractor;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const subcontractor = await db.subcontractor.findByPk(id, options);

    await subcontractor.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await subcontractor.destroy({
      transaction,
    });

    return subcontractor;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const subcontractor = await db.subcontractor.findOne(
      { where },
      { transaction },
    );

    if (!subcontractor) {
      return subcontractor;
    }

    const output = subcontractor.get({ plain: true });

    output.related_documents = await subcontractor.getRelated_documents({
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
        model: db.documents,
        as: 'related_documents',
        through: filter.related_documents
          ? {
              where: {
                [Op.or]: filter.related_documents.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.related_documents ? true : null,
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('subcontractor', 'name', filter.name),
        };
      }

      if (filter.first_name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'subcontractor',
            'first_name',
            filter.first_name,
          ),
        };
      }

      if (filter.last_name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('subcontractor', 'last_name', filter.last_name),
        };
      }

      if (filter.address) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('subcontractor', 'address', filter.address),
        };
      }

      if (filter.phone) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('subcontractor', 'phone', filter.phone),
        };
      }

      if (filter.mobile_phone) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'subcontractor',
            'mobile_phone',
            filter.mobile_phone,
          ),
        };
      }

      if (filter.entity_name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'subcontractor',
            'entity_name',
            filter.entity_name,
          ),
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
          count: await db.subcontractor.count({
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
      : await db.subcontractor.findAndCountAll({
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
          Utils.ilike('subcontractor', 'id', query),
        ],
      };
    }

    const records = await db.subcontractor.findAll({
      attributes: ['id', 'id'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['id', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }
};
