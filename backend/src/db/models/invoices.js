const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const invoices = sequelize.define(
    'invoices',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      invoice_number: {
        type: DataTypes.TEXT,
      },

      invoice_date: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('invoice_date')
            ? moment.utc(this.getDataValue('invoice_date')).format('YYYY-MM-DD')
            : null;
        },
      },

      terms: {
        type: DataTypes.ENUM,

        values: [
          'By Due Date',

          'Upon Receipt',

          'Net 7 Days',

          'Net 10 Days',

          'Net 15 Days',

          'Net 30 Days',

          'Net 45 Days',

          'Net 60 Days',
        ],
      },

      approved_job_value: {
        type: DataTypes.DECIMAL,
      },

      balance_amount: {
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

  invoices.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.invoices.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.invoices.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.invoices.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return invoices;
};
