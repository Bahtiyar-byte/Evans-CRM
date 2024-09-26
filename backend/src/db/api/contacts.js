const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ContactsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contacts = await db.contacts.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address || null,
        status: data.status || null,
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        source: data.source || null,
        category: data.category || null,
        work_type: data.work_type || null,
        referral: data.referral || null,
        company: data.company || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await contacts.setAssigned_to(data.assigned_to || null, {
      transaction,
    });

    await contacts.setRelated_phones(data.related_phones || [], {
      transaction,
    });

    await contacts.setRelated_emails(data.related_emails || [], {
      transaction,
    });

    return contacts;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const contactsData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      email: item.email || null,
      phone: item.phone || null,
      address: item.address || null,
      status: item.status || null,
      firstName: item.firstName || null,
      lastName: item.lastName || null,
      source: item.source || null,
      category: item.category || null,
      work_type: item.work_type || null,
      referral: item.referral || null,
      company: item.company || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const contacts = await db.contacts.bulkCreate(contactsData, {
      transaction,
    });

    // For each item created, replace relation files

    return contacts;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contacts = await db.contacts.findByPk(id, {}, { transaction });

    await contacts.update(
      {
        name: data.name || null,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address || null,
        status: data.status || null,
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        source: data.source || null,
        category: data.category || null,
        work_type: data.work_type || null,
        referral: data.referral || null,
        company: data.company || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await contacts.setAssigned_to(data.assigned_to || null, {
      transaction,
    });

    await contacts.setRelated_phones(data.related_phones || [], {
      transaction,
    });

    await contacts.setRelated_emails(data.related_emails || [], {
      transaction,
    });

    return contacts;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contacts = await db.contacts.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of contacts) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of contacts) {
        await record.destroy({ transaction });
      }
    });

    return contacts;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const contacts = await db.contacts.findByPk(id, options);

    await contacts.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await contacts.destroy({
      transaction,
    });

    return contacts;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const contacts = await db.contacts.findOne({ where }, { transaction });

    if (!contacts) {
      return contacts;
    }

    const output = contacts.get({ plain: true });

    output.estimates_related_contact =
      await contacts.getEstimates_related_contact({
        transaction,
      });

    output.jobs_related_contact = await contacts.getJobs_related_contact({
      transaction,
    });

    output.images_related_contact = await contacts.getImages_related_contact({
      transaction,
    });

    output.documents_related_contact =
      await contacts.getDocuments_related_contact({
        transaction,
      });

    output.emails_related_contact = await contacts.getEmails_related_contact({
      transaction,
    });

    output.appointments_related_contact =
      await contacts.getAppointments_related_contact({
        transaction,
      });

    output.contracts_related_contact =
      await contacts.getContracts_related_contact({
        transaction,
      });

    output.history_related_contact = await contacts.getHistory_related_contact({
      transaction,
    });

    output.address_related_contact = await contacts.getAddress_related_contact({
      transaction,
    });

    output.related_phones = await contacts.getRelated_phones({
      transaction,
    });

    output.related_emails = await contacts.getRelated_emails({
      transaction,
    });

    output.assigned_to = await contacts.getAssigned_to({
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
        model: db.contact_phones,
        as: 'related_phones',
        through: filter.related_phones
          ? {
              where: {
                [Op.or]: filter.related_phones.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.related_phones ? true : null,
      },

      {
        model: db.contact_emails,
        as: 'related_emails',
        through: filter.related_emails
          ? {
              where: {
                [Op.or]: filter.related_emails.split('|').map((item) => {
                  return { ['Id']: Utils.uuid(item) };
                }),
              },
            }
          : null,
        required: filter.related_emails ? true : null,
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
          [Op.and]: Utils.ilike('contacts', 'name', filter.name),
        };
      }

      if (filter.email) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contacts', 'email', filter.email),
        };
      }

      if (filter.phone) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contacts', 'phone', filter.phone),
        };
      }

      if (filter.address) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contacts', 'address', filter.address),
        };
      }

      if (filter.firstName) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contacts', 'firstName', filter.firstName),
        };
      }

      if (filter.lastName) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contacts', 'lastName', filter.lastName),
        };
      }

      if (filter.referral) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contacts', 'referral', filter.referral),
        };
      }

      if (filter.company) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('contacts', 'company', filter.company),
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

      if (filter.status) {
        where = {
          ...where,
          status: filter.status,
        };
      }

      if (filter.source) {
        where = {
          ...where,
          source: filter.source,
        };
      }

      if (filter.category) {
        where = {
          ...where,
          category: filter.category,
        };
      }

      if (filter.work_type) {
        where = {
          ...where,
          work_type: filter.work_type,
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
          count: await db.contacts.count({
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
      : await db.contacts.findAndCountAll({
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
          Utils.ilike('contacts', 'name', query),
        ],
      };
    }

    const records = await db.contacts.findAll({
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
