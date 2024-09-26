const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class AddressDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const address = await db.address.create(
      {
        id: data.id || undefined,

        street: data.street || null,
        suite_apt_unit: data.suite_apt_unit || null,
        city: data.city || null,
        state: data.state || null,
        zip: data.zip || null,
        country: data.country || null,
        is_mailing_address: data.is_mailing_address || false,

        is_location: data.is_location || false,

        is_billing_Address: data.is_billing_Address || false,

        latitude: data.latitude || null,
        longitude: data.longitude || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await address.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await address.setRelated_job(data.related_job || null, {
      transaction,
    });

    return address;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const addressData = data.map((item, index) => ({
      id: item.id || undefined,

      street: item.street || null,
      suite_apt_unit: item.suite_apt_unit || null,
      city: item.city || null,
      state: item.state || null,
      zip: item.zip || null,
      country: item.country || null,
      is_mailing_address: item.is_mailing_address || false,

      is_location: item.is_location || false,

      is_billing_Address: item.is_billing_Address || false,

      latitude: item.latitude || null,
      longitude: item.longitude || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const address = await db.address.bulkCreate(addressData, { transaction });

    // For each item created, replace relation files

    return address;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const address = await db.address.findByPk(id, {}, { transaction });

    await address.update(
      {
        street: data.street || null,
        suite_apt_unit: data.suite_apt_unit || null,
        city: data.city || null,
        state: data.state || null,
        zip: data.zip || null,
        country: data.country || null,
        is_mailing_address: data.is_mailing_address || false,

        is_location: data.is_location || false,

        is_billing_Address: data.is_billing_Address || false,

        latitude: data.latitude || null,
        longitude: data.longitude || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await address.setRelated_contact(data.related_contact || null, {
      transaction,
    });

    await address.setRelated_job(data.related_job || null, {
      transaction,
    });

    return address;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const address = await db.address.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of address) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of address) {
        await record.destroy({ transaction });
      }
    });

    return address;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const address = await db.address.findByPk(id, options);

    await address.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await address.destroy({
      transaction,
    });

    return address;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const address = await db.address.findOne({ where }, { transaction });

    if (!address) {
      return address;
    }

    const output = address.get({ plain: true });

    output.related_contact = await address.getRelated_contact({
      transaction,
    });

    output.related_job = await address.getRelated_job({
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

      if (filter.street) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('address', 'street', filter.street),
        };
      }

      if (filter.suite_apt_unit) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'address',
            'suite_apt_unit',
            filter.suite_apt_unit,
          ),
        };
      }

      if (filter.city) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('address', 'city', filter.city),
        };
      }

      if (filter.zip) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('address', 'zip', filter.zip),
        };
      }

      if (filter.latitudeRange) {
        const [start, end] = filter.latitudeRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            latitude: {
              ...where.latitude,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            latitude: {
              ...where.latitude,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.longitudeRange) {
        const [start, end] = filter.longitudeRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            longitude: {
              ...where.longitude,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            longitude: {
              ...where.longitude,
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

      if (filter.state) {
        where = {
          ...where,
          state: filter.state,
        };
      }

      if (filter.country) {
        where = {
          ...where,
          country: filter.country,
        };
      }

      if (filter.is_mailing_address) {
        where = {
          ...where,
          is_mailing_address: filter.is_mailing_address,
        };
      }

      if (filter.is_location) {
        where = {
          ...where,
          is_location: filter.is_location,
        };
      }

      if (filter.is_billing_Address) {
        where = {
          ...where,
          is_billing_Address: filter.is_billing_Address,
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
          count: await db.address.count({
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
      : await db.address.findAndCountAll({
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
          Utils.ilike('address', 'id', query),
        ],
      };
    }

    const records = await db.address.findAll({
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
