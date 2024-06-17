const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class JobsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const jobs = await db.jobs.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        description: data.description || null,
        category: data.category || null,
        type: data.type || null,
        status: data.status || null,
        address: data.address || null,
        start_date: data.start_date || null,
        end_date: data.end_date || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await jobs.setAssigned_to(data.assigned_to || null, {
      transaction,
    });

    await jobs.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.jobs.getTableName(),
        belongsToColumn: 'main_image',
        belongsToId: jobs.id,
      },
      data.main_image,
      options,
    );

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.jobs.getTableName(),
        belongsToColumn: 'documents',
        belongsToId: jobs.id,
      },
      data.documents,
      options,
    );

    return jobs;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const jobsData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      description: item.description || null,
      category: item.category || null,
      type: item.type || null,
      status: item.status || null,
      address: item.address || null,
      start_date: item.start_date || null,
      end_date: item.end_date || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const jobs = await db.jobs.bulkCreate(jobsData, { transaction });

    // For each item created, replace relation files

    for (let i = 0; i < jobs.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.jobs.getTableName(),
          belongsToColumn: 'main_image',
          belongsToId: jobs[i].id,
        },
        data[i].main_image,
        options,
      );
    }

    for (let i = 0; i < jobs.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.jobs.getTableName(),
          belongsToColumn: 'documents',
          belongsToId: jobs[i].id,
        },
        data[i].documents,
        options,
      );
    }

    return jobs;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const jobs = await db.jobs.findByPk(id, {}, { transaction });

    await jobs.update(
      {
        name: data.name || null,
        description: data.description || null,
        category: data.category || null,
        type: data.type || null,
        status: data.status || null,
        address: data.address || null,
        start_date: data.start_date || null,
        end_date: data.end_date || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await jobs.setAssigned_to(data.assigned_to || null, {
      transaction,
    });

    await jobs.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.jobs.getTableName(),
        belongsToColumn: 'main_image',
        belongsToId: jobs.id,
      },
      data.main_image,
      options,
    );

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.jobs.getTableName(),
        belongsToColumn: 'documents',
        belongsToId: jobs.id,
      },
      data.documents,
      options,
    );

    return jobs;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const jobs = await db.jobs.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of jobs) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of jobs) {
        await record.destroy({ transaction });
      }
    });

    return jobs;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const jobs = await db.jobs.findByPk(id, options);

    await jobs.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await jobs.destroy({
      transaction,
    });

    return jobs;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const jobs = await db.jobs.findOne({ where }, { transaction });

    if (!jobs) {
      return jobs;
    }

    const output = jobs.get({ plain: true });

    output.estimates_related_job = await jobs.getEstimates_related_job({
      transaction,
    });

    output.invoices_related_job = await jobs.getInvoices_related_job({
      transaction,
    });

    output.orders_related_job = await jobs.getOrders_related_job({
      transaction,
    });

    output.images_related_job = await jobs.getImages_related_job({
      transaction,
    });

    output.documents_related_job = await jobs.getDocuments_related_job({
      transaction,
    });

    output.emails_related_job = await jobs.getEmails_related_job({
      transaction,
    });

    output.chats_related_job = await jobs.getChats_related_job({
      transaction,
    });

    output.appointments_related_job = await jobs.getAppointments_related_job({
      transaction,
    });

    output.tasks_related_job = await jobs.getTasks_related_job({
      transaction,
    });

    output.contracts_related_job = await jobs.getContracts_related_job({
      transaction,
    });

    output.amendments_related_job = await jobs.getAmendments_related_job({
      transaction,
    });

    output.assigned_to = await jobs.getAssigned_to({
      transaction,
    });

    output.related_contact = await jobs.getRelated_contact({
      transaction,
    });

    output.main_image = await jobs.getMain_image({
      transaction,
    });

    output.documents = await jobs.getDocuments({
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
        model: db.users,
        as: 'assigned_to',
      },

      {
        model: db.contacts,
        as: 'related_contact',
      },

      {
        model: db.file,
        as: 'main_image',
      },

      {
        model: db.file,
        as: 'documents',
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
          [Op.and]: Utils.ilike('jobs', 'name', filter.name),
        };
      }

      if (filter.description) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('jobs', 'description', filter.description),
        };
      }

      if (filter.address) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('jobs', 'address', filter.address),
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

      if (filter.category) {
        where = {
          ...where,
          category: filter.category,
        };
      }

      if (filter.type) {
        where = {
          ...where,
          type: filter.type,
        };
      }

      if (filter.status) {
        where = {
          ...where,
          status: filter.status,
        };
      }

      if (filter.assigned_to) {
        var listItems = filter.assigned_to.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          assigned_toId: { [Op.or]: listItems },
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
          count: await db.jobs.count({
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
      : await db.jobs.findAndCountAll({
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
          Utils.ilike('jobs', 'name', query),
        ],
      };
    }

    const records = await db.jobs.findAll({
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
