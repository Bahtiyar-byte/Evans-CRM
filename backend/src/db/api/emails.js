const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class EmailsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const emails = await db.emails.create(
      {
        id: data.id || undefined,

        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await emails.setRelated_job(data.related_job || null, {
      transaction,
    });

    await emails.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await emails.setRelated_user(data.related_user || null, {
      transaction,
    });

    return emails;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const emailsData = data.map((item, index) => ({
      id: item.id || undefined,

      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const emails = await db.emails.bulkCreate(emailsData, { transaction });

    // For each item created, replace relation files

    return emails;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const emails = await db.emails.findByPk(id, {}, { transaction });

    await emails.update(
      {
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await emails.setRelated_job(data.related_job || null, {
      transaction,
    });

    await emails.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await emails.setRelated_user(data.related_user || null, {
      transaction,
    });

    return emails;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const emails = await db.emails.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of emails) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of emails) {
        await record.destroy({ transaction });
      }
    });

    return emails;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const emails = await db.emails.findByPk(id, options);

    await emails.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await emails.destroy({
      transaction,
    });

    return emails;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const emails = await db.emails.findOne({ where }, { transaction });

    if (!emails) {
      return emails;
    }

    const output = emails.get({ plain: true });

    output.history_related_email = await emails.getHistory_related_email({
      transaction,
    });

    output.related_job = await emails.getRelated_job({
      transaction,
    });

    output.related_contact = await emails.getRelated_contact({
      transaction,
    });

    output.related_user = await emails.getRelated_user({
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
        model: db.users,
        as: 'related_user',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
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

      if (filter.related_user) {
        var listItems = filter.related_user.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_userId: { [Op.or]: listItems },
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
          count: await db.emails.count({
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
      : await db.emails.findAndCountAll({
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
          Utils.ilike('emails', 'id', query),
        ],
      };
    }

    const records = await db.emails.findAll({
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
