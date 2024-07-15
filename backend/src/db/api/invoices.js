const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class InvoicesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const invoices = await db.invoices.create(
      {
        id: data.id || undefined,

        invoice_number: data.invoice_number || null,
        invoice_date: data.invoice_date || null,
        terms: data.terms || null,
        approved_job_value: data.approved_job_value || null,
        balance_amount: data.balance_amount || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await invoices.setRelated_job(data.related_job || null, {
      transaction,
    });

    return invoices;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const invoicesData = data.map((item, index) => ({
      id: item.id || undefined,

      invoice_number: item.invoice_number || null,
      invoice_date: item.invoice_date || null,
      terms: item.terms || null,
      approved_job_value: item.approved_job_value || null,
      balance_amount: item.balance_amount || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const invoices = await db.invoices.bulkCreate(invoicesData, {
      transaction,
    });

    // For each item created, replace relation files

    return invoices;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const invoices = await db.invoices.findByPk(id, {}, { transaction });

    await invoices.update(
      {
        invoice_number: data.invoice_number || null,
        invoice_date: data.invoice_date || null,
        terms: data.terms || null,
        approved_job_value: data.approved_job_value || null,
        balance_amount: data.balance_amount || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await invoices.setRelated_job(data.related_job || null, {
      transaction,
    });

    return invoices;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const invoices = await db.invoices.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of invoices) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of invoices) {
        await record.destroy({ transaction });
      }
    });

    return invoices;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const invoices = await db.invoices.findByPk(id, options);

    await invoices.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await invoices.destroy({
      transaction,
    });

    return invoices;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const invoices = await db.invoices.findOne({ where }, { transaction });

    if (!invoices) {
      return invoices;
    }

    const output = invoices.get({ plain: true });

    output.related_job = await invoices.getRelated_job({
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
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.invoice_number) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'invoices',
            'invoice_number',
            filter.invoice_number,
          ),
        };
      }

      if (filter.invoice_dateRange) {
        const [start, end] = filter.invoice_dateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            invoice_date: {
              ...where.invoice_date,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            invoice_date: {
              ...where.invoice_date,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.approved_job_valueRange) {
        const [start, end] = filter.approved_job_valueRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            approved_job_value: {
              ...where.approved_job_value,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            approved_job_value: {
              ...where.approved_job_value,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.balance_amountRange) {
        const [start, end] = filter.balance_amountRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            balance_amount: {
              ...where.balance_amount,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            balance_amount: {
              ...where.balance_amount,
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

      if (filter.terms) {
        where = {
          ...where,
          terms: filter.terms,
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
          count: await db.invoices.count({
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
      : await db.invoices.findAndCountAll({
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
          Utils.ilike('invoices', 'invoice_number', query),
        ],
      };
    }

    const records = await db.invoices.findAll({
      attributes: ['id', 'invoice_number'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['invoice_number', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.invoice_number,
    }));
  }
};
