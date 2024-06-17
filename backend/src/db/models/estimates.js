const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const estimates = sequelize.define(
    'estimates',
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

      trade: {
        type: DataTypes.TEXT,
      },

      template_used: {
        type: DataTypes.TEXT,
      },

      material_cost: {
        type: DataTypes.DECIMAL,
      },

      labor_cost: {
        type: DataTypes.DECIMAL,
      },

      markup: {
        type: DataTypes.DECIMAL,
      },

      profit_margin: {
        type: DataTypes.DECIMAL,
      },

      total_price: {
        type: DataTypes.DECIMAL,
      },

      status: {
        type: DataTypes.ENUM,

        values: ['New', 'Approved', 'Sent'],
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

  estimates.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.estimates.hasMany(db.orders, {
      as: 'orders_related_estimate',
      foreignKey: {
        name: 'related_estimateId',
      },
      constraints: false,
    });

    db.estimates.hasMany(db.estimate_sections, {
      as: 'estimate_sections_related_estimate',
      foreignKey: {
        name: 'related_estimateId',
      },
      constraints: false,
    });

    //end loop

    db.estimates.belongsTo(db.contacts, {
      as: 'related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.estimates.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.estimates.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.estimates.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return estimates;
};
