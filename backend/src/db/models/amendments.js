const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const amendments = sequelize.define(
    'amendments',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      type: {
        type: DataTypes.ENUM,

        values: [
          'Change Order',

          'Discount',

          'Insurance Claim',

          'Supplement',

          'Upgrade',
        ],
      },

      amount: {
        type: DataTypes.DECIMAL,
      },

      description: {
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

  amendments.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.amendments.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.amendments.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.amendments.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return amendments;
};
