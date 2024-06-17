const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class EstimatesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const estimates = await db.estimates.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        description: data.description || null,
        trade: data.trade || null,
        template_used: data.template_used || null,
        material_cost: data.material_cost || null,
        labor_cost: data.labor_cost || null,
        markup: data.markup || null,
        profit_margin: data.profit_margin || null,
        total_price: data.total_price || null,
        status: data.status || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await estimates.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await estimates.setRelated_job(data.related_job || null, {
      transaction,
    });

    return estimates;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const estimatesData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      description: item.description || null,
      trade: item.trade || null,
      template_used: item.template_used || null,
      material_cost: item.material_cost || null,
      labor_cost: item.labor_cost || null,
      markup: item.markup || null,
      profit_margin: item.profit_margin || null,
      total_price: item.total_price || null,
      status: item.status || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const estimates = await db.estimates.bulkCreate(estimatesData, {
      transaction,
    });

    // For each item created, replace relation files

    return estimates;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const estimates = await db.estimates.findByPk(id, {}, { transaction });

    await estimates.update(
      {
        name: data.name || null,
        description: data.description || null,
        trade: data.trade || null,
        template_used: data.template_used || null,
        material_cost: data.material_cost || null,
        labor_cost: data.labor_cost || null,
        markup: data.markup || null,
        profit_margin: data.profit_margin || null,
        total_price: data.total_price || null,
        status: data.status || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await estimates.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await estimates.setRelated_job(data.related_job || null, {
      transaction,
    });

    return estimates;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const estimates = await db.estimates.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of estimates) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of estimates) {
        await record.destroy({ transaction });
      }
    });

    return estimates;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const estimates = await db.estimates.findByPk(id, options);

    await estimates.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await estimates.destroy({
      transaction,
    });

    return estimates;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const estimates = await db.estimates.findOne({ where }, { transaction });

    if (!estimates) {
      return estimates;
    }

    const output = estimates.get({ plain: true });

    output.orders_related_estimate = await estimates.getOrders_related_estimate(
      {
        transaction,
      },
    );

    output.estimate_sections_related_estimate =
      await estimates.getEstimate_sections_related_estimate({
        transaction,
      });

    output.related_contact = await estimates.getRelated_contact({
      transaction,
    });

    output.related_job = await estimates.getRelated_job({
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
          [Op.and]: Utils.ilike('estimates', 'name', filter.name),
        };
      }

      if (filter.description) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('estimates', 'description', filter.description),
        };
      }

      if (filter.trade) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('estimates', 'trade', filter.trade),
        };
      }

      if (filter.template_used) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'estimates',
            'template_used',
            filter.template_used,
          ),
        };
      }

      if (filter.material_costRange) {
        const [start, end] = filter.material_costRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            material_cost: {
              ...where.material_cost,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            material_cost: {
              ...where.material_cost,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.labor_costRange) {
        const [start, end] = filter.labor_costRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            labor_cost: {
              ...where.labor_cost,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            labor_cost: {
              ...where.labor_cost,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.markupRange) {
        const [start, end] = filter.markupRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            markup: {
              ...where.markup,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            markup: {
              ...where.markup,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.profit_marginRange) {
        const [start, end] = filter.profit_marginRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            profit_margin: {
              ...where.profit_margin,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            profit_margin: {
              ...where.profit_margin,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.total_priceRange) {
        const [start, end] = filter.total_priceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            total_price: {
              ...where.total_price,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            total_price: {
              ...where.total_price,
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

      if (filter.status) {
        where = {
          ...where,
          status: filter.status,
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
          count: await db.estimates.count({
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
      : await db.estimates.findAndCountAll({
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
          Utils.ilike('estimates', 'name', query),
        ],
      };
    }

    const records = await db.estimates.findAll({
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
