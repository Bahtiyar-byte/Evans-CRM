const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const trades = sequelize.define(
    'trades',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
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

  trades.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.trades.hasMany(db.templates, {
      as: 'templates_related_trade',
      foreignKey: {
        name: 'related_tradeId',
      },
      constraints: false,
    });

    //end loop

    db.trades.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.trades.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return trades;
};
