const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Contact_phonesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contact_phones = await db.contact_phones.create(
      {
        id: data.id || undefined,

        phone_number: data.phone_number || null,
        type: data.type || null,
        is_primary: data.is_primary || false,

        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return contact_phones;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const contact_phonesData = data.map((item, index) => ({
      id: item.id || undefined,

      phone_number: item.phone_number || null,
      type: item.type || null,
      is_primary: item.is_primary || false,

      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const contact_phones = await db.contact_phones.bulkCreate(
      contact_phonesData,
      { transaction },
    );

    // For each item created, replace relation files

    return contact_phones;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contact_phones = await db.contact_phones.findByPk(
      id,
      {},
      { transaction },
    );

    await contact_phones.update(
      {
        phone_number: data.phone_number || null,
        type: data.type || null,
        is_primary: data.is_primary || false,

        updatedById: currentUser.id,
      },
      { transaction },
    );

    return contact_phones;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contact_phones = await db.contact_phones.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of contact_phones) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of contact_phones) {
        await record.destroy({ transaction });
      }
    });

    return contact_phones;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contact_phones = await db.contact_phones.findByPk(id, options);

    await contact_phones.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await contact_phones.destroy({
      transaction,
    });

    return contact_phones;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const contact_phones = await db.contact_phones.findOne(
      { where },
      { transaction },
    );

    if (!contact_phones) {
      return contact_phones;
    }

    const output = contact_phones.get({ plain: true });

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
    let include = [];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.phone_number) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'contact_phones',
            'phone_number',
            filter.phone_number,
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

      if (filter.type) {
        where = {
          ...where,
          type: filter.type,
        };
      }

      if (filter.is_primary) {
        where = {
          ...where,
          is_primary: filter.is_primary,
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
          count: await db.contact_phones.count({
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
      : await db.contact_phones.findAndCountAll({
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
          Utils.ilike('contact_phones', 'phone_number', query),
        ],
      };
    }

    const records = await db.contact_phones.findAll({
      attributes: ['id', 'phone_number'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['phone_number', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.phone_number,
    }));
  }
};
