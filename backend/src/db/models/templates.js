const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const templates = sequelize.define(
    'templates',
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

      is_email_template: {
        type: DataTypes.BOOLEAN,

        allowNull: false,
        defaultValue: false,
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

  templates.associate = (db) => {
    db.templates.belongsToMany(db.trades, {
      as: 'related_trade',
      foreignKey: {
        name: 'templates_related_tradeId',
      },
      constraints: false,
      through: 'templatesRelated_tradeTrades',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.templates.hasMany(db.estimate_sections, {
      as: 'estimate_sections_related_template',
      foreignKey: {
        name: 'related_templateId',
      },
      constraints: false,
    });

    //end loop

    db.templates.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.templates.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return templates;
};
