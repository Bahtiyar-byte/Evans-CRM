const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const orders = sequelize.define(
    'orders',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      order_number: {
        type: DataTypes.TEXT,
      },

      total_amount: {
        type: DataTypes.DECIMAL,
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

  orders.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.orders.hasMany(db.labor_ticket, {
      as: 'labor_ticket_related_order',
      foreignKey: {
        name: 'related_orderId',
      },
      constraints: false,
    });

    //end loop

    db.orders.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.orders.belongsTo(db.estimates, {
      as: 'related_estimate',
      foreignKey: {
        name: 'related_estimateId',
      },
      constraints: false,
    });

    db.orders.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.orders.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return orders;
};
