const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ContractsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contracts = await db.contracts.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        amount: data.amount || null,
        body: data.body || null,
        signed_date: data.signed_date || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await contracts.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await contracts.setRelated_job(data.related_job || null, {
      transaction,
    });

    return contracts;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const contractsData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      amount: item.amount || null,
      body: item.body || null,
      signed_date: item.signed_date || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const contracts = await db.contracts.bulkCreate(contractsData, {
      transaction,
    });

    // For each item created, replace relation files

    return contracts;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contracts = await db.contracts.findByPk(id, {}, { transaction });

    await contracts.update(
      {
        name: data.name || null,
        amount: data.amount || null,
        body: data.body || null,
        signed_date: data.signed_date || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await contracts.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await contracts.setRelated_job(data.related_job || null, {
      transaction,
    });

    return contracts;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contracts = await db.contracts.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of contracts) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of contracts) {
        await record.destroy({ transaction });
      }
    });

    return contracts;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contracts = await db.contracts.findByPk(id, options);

    await contracts.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await contracts.destroy({
      transaction,
    });

    return contracts;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const contracts = await db.contracts.findOne({ where }, { transaction });

    if (!contracts) {
      return contracts;
    }

    const output = contracts.get({ plain: true });

    output.related_contact = await contracts.getRelated_contact({
      transaction,
    });

    output.related_job = await contracts.getRelated_job({
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
        model: db.contacts,
        as: 'related_contact',
      },

      {
        model: db.jobs,
        as: 'related_job',
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
          [Op.and]: Utils.ilike('contracts', 'name', filter.name),
        };
      }

      if (filter.body) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contracts', 'body', filter.body),
        };
      }

      if (filter.amountRange) {
        const [start, end] = filter.amountRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            amount: {
              ...where.amount,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            amount: {
              ...where.amount,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.signed_dateRange) {
        const [start, end] = filter.signed_dateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            signed_date: {
              ...where.signed_date,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            signed_date: {
              ...where.signed_date,
              [Op.lte]: end,
            },
          };
        }
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

      if (filter.related_contact) {
        var listItems = filter.related_contact.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_contactId: { [Op.or]: listItems },
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
          count: await db.contracts.count({
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
      : await db.contracts.findAndCountAll({
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
          Utils.ilike('contracts', 'name', query),
        ],
      };
    }

    const records = await db.contracts.findAll({
      attributes: ['id', 'name'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['name', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.name,
    }));
  }
};
