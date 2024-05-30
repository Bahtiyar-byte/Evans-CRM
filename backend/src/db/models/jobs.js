const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const jobs = sequelize.define(
    'jobs',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      category: {
        type: DataTypes.ENUM,

        values: ['Commercial', 'PropertyManagement', 'Residential'],
      },

      type: {
        type: DataTypes.ENUM,

        values: [
          'New',

          'Repair',

          'Service',

          'Warranty',

          'Inspection',

          'Insurance',

          'Retail',
        ],
      },

      status: {
        type: DataTypes.ENUM,

        values: ['Quoted', 'Approved', 'Active', 'Completed', 'Invoiced'],
      },

      address: {
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

  jobs.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.jobs.hasMany(db.estimates, {
      as: 'estimates_related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    //end loop

    db.jobs.belongsTo(db.users, {
      as: 'assigned_to',
      foreignKey: {
        name: 'assigned_toId',
      },
      constraints: false,
    });

    db.jobs.belongsTo(db.contacts, {
      as: 'related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.jobs.belongsTo(db.estimates, {
      as: 'related_estimate',
      foreignKey: {
        name: 'related_estimateId',
      },
      constraints: false,
    });

    db.jobs.hasMany(db.file, {
      as: 'images',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.jobs.getTableName(),
        belongsToColumn: 'images',
      },
    });

    db.jobs.hasMany(db.file, {
      as: 'documents',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.jobs.getTableName(),
        belongsToColumn: 'documents',
      },
    });

    db.jobs.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.jobs.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return jobs;
};
