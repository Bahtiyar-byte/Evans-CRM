const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const appointments = sequelize.define(
    'appointments',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      subject: {
        type: DataTypes.TEXT,
      },

      start_time: {
        type: DataTypes.DATE,
      },

      end_time: {
        type: DataTypes.DATE,
      },

      notes: {
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

  appointments.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.appointments.belongsTo(db.users, {
      as: 'assigned_to',
      foreignKey: {
        name: 'assigned_toId',
      },
      constraints: false,
    });

    db.appointments.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.appointments.belongsTo(db.contacts, {
      as: 'related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.appointments.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.appointments.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return appointments;
};
