const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Labor_ticketDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const labor_ticket = await db.labor_ticket.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        start_date: data.start_date || null,
        end_date: data.end_date || null,
        crew_instructions: data.crew_instructions || null,
        actual_start_time: data.actual_start_time || null,
        actual_end_time: data.actual_end_time || null,
        crew_actions: data.crew_actions || null,
        labor_progress: data.labor_progress || null,
        disclaimer: data.disclaimer || null,
        assigned_date: data.assigned_date || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await labor_ticket.setRelated_job(data.related_job || null, {
      transaction,
    });

    await labor_ticket.setRelated_order(data.related_order || null, {
      transaction,
    });

    await labor_ticket.setRelated_images(data.related_images || [], {
      transaction,
    });

    await labor_ticket.setRelated_document(data.related_document || [], {
      transaction,
    });

    await labor_ticket.setAssigned_crew(data.assigned_crew || [], {
      transaction,
    });

    return labor_ticket;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const labor_ticketData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      start_date: item.start_date || null,
      end_date: item.end_date || null,
      crew_instructions: item.crew_instructions || null,
      actual_start_time: item.actual_start_time || null,
      actual_end_time: item.actual_end_time || null,
      crew_actions: item.crew_actions || null,
      labor_progress: item.labor_progress || null,
      disclaimer: item.disclaimer || null,
      assigned_date: item.assigned_date || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const labor_ticket = await db.labor_ticket.bulkCreate(labor_ticketData, {
      transaction,
    });

    // For each item created, replace relation files

    return labor_ticket;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const labor_ticket = await db.labor_ticket.findByPk(
      id,
      {},
      { transaction },
    );

    await labor_ticket.update(
      {
        name: data.name || null,
        start_date: data.start_date || null,
        end_date: data.end_date || null,
        crew_instructions: data.crew_instructions || null,
        actual_start_time: data.actual_start_time || null,
        actual_end_time: data.actual_end_time || null,
        crew_actions: data.crew_actions || null,
        labor_progress: data.labor_progress || null,
        disclaimer: data.disclaimer || null,
        assigned_date: data.assigned_date || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await labor_ticket.setRelated_job(data.related_job || null, {
      transaction,
    });

    await labor_ticket.setRelated_order(data.related_order || null, {
      transaction,
    });

    await labor_ticket.setRelated_images(data.related_images || [], {
      transaction,
    });

    await labor_ticket.setRelated_document(data.related_document || [], {
      transaction,
    });

    await labor_ticket.setAssigned_crew(data.assigned_crew || [], {
      transaction,
    });

    return labor_ticket;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const labor_ticket = await db.labor_ticket.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of labor_ticket) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of labor_ticket) {
        await record.destroy({ transaction });
      }
    });

    return labor_ticket;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const labor_ticket = await db.labor_ticket.findByPk(id, options);

    await labor_ticket.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await labor_ticket.destroy({
      transaction,
    });

    return labor_ticket;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const labor_ticket = await db.labor_ticket.findOne(
      { where },
      { transaction },
    );

    if (!labor_ticket) {
      return labor_ticket;
    }

    const output = labor_ticket.get({ plain: true });

    output.history_related_labor_ticket =
      await labor_ticket.getHistory_related_labor_ticket({
        transaction,
      });

    output.related_job = await labor_ticket.getRelated_job({
      transaction,
    });

    output.related_images = await labor_ticket.getRelated_images({
      transaction,
    });

    output.related_document = await labor_ticket.getRelated_document({
      transaction,
    });

    output.assigned_crew = await labor_ticket.getAssigned_crew({
      transaction,
    });

    output.related_order = await labor_ticket.getRelated_order({
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
        model: db.orders,
        as: 'related_order',
      },

      {
        model: db.images,
        as: 'related_images',
        through: filter.related_images
          ? {
              where: {
                [Op.or]: filter.related_images.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.related_images ? true : null,
      },

      {
        model: db.documents,
        as: 'related_document',
        through: filter.related_document
          ? {
              where: {
                [Op.or]: filter.related_document.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.related_document ? true : null,
      },

      {
        model: db.crew,
        as: 'assigned_crew',
        through: filter.assigned_crew
          ? {
              where: {
                [Op.or]: filter.assigned_crew.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.assigned_crew ? true : null,
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
          [Op.and]: Utils.ilike('labor_ticket', 'name', filter.name),
        };
      }

      if (filter.crew_instructions) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'labor_ticket',
            'crew_instructions',
            filter.crew_instructions,
          ),
        };
      }

      if (filter.disclaimer) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'labor_ticket',
            'disclaimer',
            filter.disclaimer,
          ),
        };
      }

      if (filter.start_dateRange) {
        const [start, end] = filter.start_dateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            start_date: {
              ...where.start_date,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            start_date: {
              ...where.start_date,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.end_dateRange) {
        const [start, end] = filter.end_dateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            end_date: {
              ...where.end_date,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            end_date: {
              ...where.end_date,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.actual_start_timeRange) {
        const [start, end] = filter.actual_start_timeRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            actual_start_time: {
              ...where.actual_start_time,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            actual_start_time: {
              ...where.actual_start_time,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.actual_end_timeRange) {
        const [start, end] = filter.actual_end_timeRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            actual_end_time: {
              ...where.actual_end_time,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            actual_end_time: {
              ...where.actual_end_time,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.assigned_dateRange) {
        const [start, end] = filter.assigned_dateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            assigned_date: {
              ...where.assigned_date,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            assigned_date: {
              ...where.assigned_date,
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

      if (filter.crew_actions) {
        where = {
          ...where,
          crew_actions: filter.crew_actions,
        };
      }

      if (filter.labor_progress) {
        where = {
          ...where,
          labor_progress: filter.labor_progress,
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

      if (filter.related_order) {
        var listItems = filter.related_order.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_orderId: { [Op.or]: listItems },
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
          count: await db.labor_ticket.count({
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
      : await db.labor_ticket.findAndCountAll({
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
          Utils.ilike('labor_ticket', 'id', query),
        ],
      };
    }

    const records = await db.labor_ticket.findAll({
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
