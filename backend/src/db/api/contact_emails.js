const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Contact_emailsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contact_emails = await db.contact_emails.create(
      {
        id: data.id || undefined,

        email: data.email || null,
        type: data.type || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return contact_emails;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const contact_emailsData = data.map((item, index) => ({
      id: item.id || undefined,

      email: item.email || null,
      type: item.type || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const contact_emails = await db.contact_emails.bulkCreate(
      contact_emailsData,
      { transaction },
    );

    // For each item created, replace relation files

    return contact_emails;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contact_emails = await db.contact_emails.findByPk(
      id,
      {},
      { transaction },
    );

    await contact_emails.update(
      {
        email: data.email || null,
        type: data.type || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return contact_emails;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contact_emails = await db.contact_emails.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of contact_emails) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of contact_emails) {
        await record.destroy({ transaction });
      }
    });

    return contact_emails;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contact_emails = await db.contact_emails.findByPk(id, options);

    await contact_emails.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await contact_emails.destroy({
      transaction,
    });

    return contact_emails;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const contact_emails = await db.contact_emails.findOne(
      { where },
      { transaction },
    );

    if (!contact_emails) {
      return contact_emails;
    }

    const output = contact_emails.get({ plain: true });

    return output;
  }

  static async findAll(filter, options) {
    const limit = filter.limit || 0;
    let offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    const orderBy = null;

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

      if (filter.email) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contact_emails', 'email', filter.email),
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
          count: await db.contact_emails.count({
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
      : await db.contact_emails.findAndCountAll({
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
          Utils.ilike('contact_emails', 'email', query),
        ],
      };
    }

    const records = await db.contact_emails.findAll({
      attributes: ['id', 'email'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['email', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.email,
    }));
  }
};
