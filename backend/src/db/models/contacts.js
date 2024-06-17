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

    //end loop

    db.contacts.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.contacts.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return contacts;
};
