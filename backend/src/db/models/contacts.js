const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const contacts = sequelize.define(
    'contacts',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      email: {
        type: DataTypes.TEXT,
      },

      phone: {
        type: DataTypes.TEXT,
      },

      address: {
        type: DataTypes.TEXT,
      },

      status: {
        type: DataTypes.ENUM,

        values: ['Lead', 'Prospect', 'Customer'],
      },

      firstName: {
        type: DataTypes.TEXT,
      },

      lastName: {
        type: DataTypes.TEXT,
      },

      source: {
        type: DataTypes.ENUM,

        values: ['Google Ads', 'Facebook', 'Website', 'Other'],
      },

      category: {
        type: DataTypes.ENUM,

        values: ['Commercial', 'Residential', 'Property Management'],
      },

      work_type: {
        type: DataTypes.ENUM,

        values: [
          'New',

          'Repair',

          'Service',

          'Retail',

          'Insurance',

          'Warranty ',

          'Inspection',
        ],
      },

      referral: {
        type: DataTypes.TEXT,
      },

      company: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  contacts.associate = (db) => {
    db.contacts.belongsToMany(db.contact_phones, {
      as: 'related_phones',
      foreignKey: {
        name: 'contacts_related_phonesId',
      },
      constraints: false,
      through: 'contactsRelated_phonesContact_phones',
    });

    db.contacts.belongsToMany(db.contact_emails, {
      as: 'related_emails',
      foreignKey: {
        name: 'contacts_related_emailsId',
      },
      constraints: false,
      through: 'contactsRelated_emailsContact_emails',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.contacts.hasMany(db.estimates, {
      as: 'estimates_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.contacts.hasMany(db.jobs, {
      as: 'jobs_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.contacts.hasMany(db.images, {
      as: 'images_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.contacts.hasMany(db.documents, {
      as: 'documents_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.contacts.hasMany(db.emails, {
      as: 'emails_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.contacts.hasMany(db.appointments, {
      as: 'appointments_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.contacts.hasMany(db.contracts, {
      as: 'contracts_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.contacts.hasMany(db.history, {
      as: 'history_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.contacts.hasMany(db.address, {
      as: 'address_related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    //end loop

    db.contacts.belongsTo(db.users, {
      as: 'assigned_to',
      foreignKey: {
        name: 'assigned_toId',
      },
      constraints: false,
    });

    db.contacts.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.contacts.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return contacts;
};
