const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const history = sequelize.define(
    'history',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      action_description: {
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

  history.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.history.belongsTo(db.estimates, {
      as: 'related_estimate',
      foreignKey: {
        name: 'related_estimateId',
      },
      constraints: false,
    });

    db.history.belongsTo(db.invoices, {
      as: 'related_invoice',
      foreignKey: {
        name: 'related_invoiceId',
      },
      constraints: false,
    });

    db.history.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.history.belongsTo(db.emails, {
      as: 'related_email',
      foreignKey: {
        name: 'related_emailId',
      },
      constraints: false,
    });

    db.history.belongsTo(db.labor_ticket, {
      as: 'related_labor_ticket',
      foreignKey: {
        name: 'related_labor_ticketId',
      },
      constraints: false,
    });

    db.history.belongsTo(db.users, {
      as: 'related_user',
      foreignKey: {
        name: 'related_userId',
      },
      constraints: false,
    });

    db.history.belongsTo(db.contacts, {
      as: 'related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.history.belongsTo(db.appointments, {
      as: 'related_appointment',
      foreignKey: {
        name: 'related_appointmentId',
      },
      constraints: false,
    });

    db.history.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.history.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return history;
};
