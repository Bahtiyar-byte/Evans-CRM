const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const images = sequelize.define(
    'images',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      Name: {
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

  images.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.images.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.images.belongsTo(db.contacts, {
      as: 'related_contact',
      foreignKey: {
        name: 'related_contactId',
      },
      constraints: false,
    });

    db.images.hasMany(db.file, {
      as: 'image',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.images.getTableName(),
        belongsToColumn: 'image',
      },
    });

    db.images.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.images.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return images;
};
