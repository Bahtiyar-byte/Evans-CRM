const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class HistoryDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const history = await db.history.create(
      {
        id: data.id || undefined,

        action_description: data.action_description || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await history.setRelated_estimate(data.related_estimate || null, {
      transaction,
    });

    await history.setRelated_invoice(data.related_invoice || null, {
      transaction,
    });

    await history.setRelated_job(data.related_job || null, {
      transaction,
    });

    await history.setRelated_email(data.related_email || null, {
      transaction,
    });

    await history.setRelated_labor_ticket(data.related_labor_ticket || null, {
      transaction,
    });

    await history.setRelated_user(data.related_user || null, {
      transaction,
    });

    await history.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await history.setRelated_appointment(data.related_appointment || null, {
      transaction,
    });

    return history;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const historyData = data.map((item, index) => ({
      id: item.id || undefined,

      action_description: item.action_description || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const history = await db.history.bulkCreate(historyData, { transaction });

    // For each item created, replace relation files

    return history;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const history = await db.history.findByPk(id, {}, { transaction });

    await history.update(
      {
        action_description: data.action_description || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await history.setRelated_estimate(data.related_estimate || null, {
      transaction,
    });

    await history.setRelated_invoice(data.related_invoice || null, {
      transaction,
    });

    await history.setRelated_job(data.related_job || null, {
      transaction,
    });

    await history.setRelated_email(data.related_email || null, {
      transaction,
    });

    await history.setRelated_labor_ticket(data.related_labor_ticket || null, {
      transaction,
    });

    await history.setRelated_user(data.related_user || null, {
      transaction,
    });

    await history.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await history.setRelated_appointment(data.related_appointment || null, {
      transaction,
    });

    return history;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const history = await db.history.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of history) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of history) {
        await record.destroy({ transaction });
      }
    });

    return history;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const history = await db.history.findByPk(id, options);

    await history.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await history.destroy({
      transaction,
    });

    return history;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const history = await db.history.findOne({ where }, { transaction });

    if (!history) {
      return history;
    }

    const output = history.get({ plain: true });

    output.related_estimate = await history.getRelated_estimate({
      transaction,
    });

    output.related_invoice = await history.getRelated_invoice({
      transaction,
    });

    output.related_job = await history.getRelated_job({
      transaction,
    });

    output.related_email = await history.getRelated_email({
      transaction,
    });

    output.related_labor_ticket = await history.getRelated_labor_ticket({
      transaction,
    });

    output.related_user = await history.getRelated_user({
      transaction,
    });

    output.related_contact = await history.getRelated_contact({
      transaction,
    });

    output.related_appointment = await history.getRelated_appointment({
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
        model: db.estimates,
        as: 'related_estimate',
      },

      {
        model: db.invoices,
        as: 'related_invoice',
      },

      {
        model: db.jobs,
        as: 'related_job',
      },

      {
        model: db.emails,
        as: 'related_email',
      },

      {
        model: db.labor_ticket,
        as: 'related_labor_ticket',
      },

      {
        model: db.users,
        as: 'related_user',
      },

      {
        model: db.contacts,
        as: 'related_contact',
      },

      {
        model: db.appointments,
        as: 'related_appointment',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.action_description) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'history',
            'action_description',
            filter.action_description,
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

      if (filter.related_estimate) {
        var listItems = filter.related_estimate.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_estimateId: { [Op.or]: listItems },
        };
      }

      if (filter.related_invoice) {
        var listItems = filter.related_invoice.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_invoiceId: { [Op.or]: listItems },
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

      if (filter.related_email) {
        var listItems = filter.related_email.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_emailId: { [Op.or]: listItems },
        };
      }

      if (filter.related_labor_ticket) {
        var listItems = filter.related_labor_ticket.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_labor_ticketId: { [Op.or]: listItems },
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

      if (filter.related_contact) {
        var listItems = filter.related_contact.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_contactId: { [Op.or]: listItems },
        };
      }

      if (filter.related_appointment) {
        var listItems = filter.related_appointment.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_appointmentId: { [Op.or]: listItems },
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
          count: await db.history.count({
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
      : await db.history.findAndCountAll({
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
          Utils.ilike('history', 'id', query),
        ],
      };
    }

    const records = await db.history.findAll({
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
