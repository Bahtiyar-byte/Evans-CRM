const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const emails = sequelize.define(
    'emails',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

  emails.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.emails.hasMany(db.history, {
      as: 'history_related_email',
      foreignKey: {
        name: 'related_emailId',
      },
      constraints: false,
    });

    //end loop

    db.emails.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.emails.belongsTo(db.contacts, {
      as: 'related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.emails.belongsTo(db.users, {
      as: 'related_user',
      foreignKey: {
        name: 'related_userId',
      },
      constraints: false,
    });

    db.emails.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.emails.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return emails;
};
