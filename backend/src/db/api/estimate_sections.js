const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Estimate_sectionsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const estimate_sections = await db.estimate_sections.create(
      {
        id: data.id || undefined,

        amount: data.amount || null,
        material_price: data.material_price || null,
        labor_price: data.labor_price || null,
        name: data.name || null,
        description: data.description || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await estimate_sections.setRelated_estimate(data.related_estimate || null, {
      transaction,
    });

    await estimate_sections.setRelated_template(data.related_template || null, {
      transaction,
    });

    return estimate_sections;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const estimate_sectionsData = data.map((item, index) => ({
      id: item.id || undefined,

      amount: item.amount || null,
      material_price: item.material_price || null,
      labor_price: item.labor_price || null,
      name: item.name || null,
      description: item.description || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const estimate_sections = await db.estimate_sections.bulkCreate(
      estimate_sectionsData,
      { transaction },
    );

    // For each item created, replace relation files

    return estimate_sections;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const estimate_sections = await db.estimate_sections.findByPk(
      id,
      {},
      { transaction },
    );

    await estimate_sections.update(
      {
        amount: data.amount || null,
        material_price: data.material_price || null,
        labor_price: data.labor_price || null,
        name: data.name || null,
        description: data.description || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await estimate_sections.setRelated_estimate(data.related_estimate || null, {
      transaction,
    });

    await estimate_sections.setRelated_template(data.related_template || null, {
      transaction,
    });

    return estimate_sections;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const estimate_sections = await db.estimate_sections.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of estimate_sections) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of estimate_sections) {
        await record.destroy({ transaction });
      }
    });

    return estimate_sections;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const estimate_sections = await db.estimate_sections.findByPk(id, options);

    await estimate_sections.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await estimate_sections.destroy({
      transaction,
    });

    return estimate_sections;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const estimate_sections = await db.estimate_sections.findOne(
      { where },
      { transaction },
    );

    if (!estimate_sections) {
      return estimate_sections;
    }

    const output = estimate_sections.get({ plain: true });

    output.related_estimate = await estimate_sections.getRelated_estimate({
      transaction,
    });

    output.related_template = await estimate_sections.getRelated_template({
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
        model: db.templates,
        as: 'related_template',
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
          [Op.and]: Utils.ilike('estimate_sections', 'name', filter.name),
        };
      }

      if (filter.description) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'estimate_sections',
            'description',
            filter.description,
          ),
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

      if (filter.material_priceRange) {
        const [start, end] = filter.material_priceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            material_price: {
              ...where.material_price,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            material_price: {
              ...where.material_price,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.labor_priceRange) {
        const [start, end] = filter.labor_priceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            labor_price: {
              ...where.labor_price,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            labor_price: {
              ...where.labor_price,
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

      if (filter.related_estimate) {
        var listItems = filter.related_estimate.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_estimateId: { [Op.or]: listItems },
        };
      }

      if (filter.related_template) {
        var listItems = filter.related_template.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          related_templateId: { [Op.or]: listItems },
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
          count: await db.estimate_sections.count({
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
      : await db.estimate_sections.findAndCountAll({
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
          Utils.ilike('estimate_sections', 'name', query),
        ],
      };
    }

    const records = await db.estimate_sections.findAll({
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
