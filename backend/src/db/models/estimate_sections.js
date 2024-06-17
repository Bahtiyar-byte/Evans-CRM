const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const estimate_sections = sequelize.define(
    'estimate_sections',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      amount: {
        type: DataTypes.DECIMAL,
      },

      material_price: {
        type: DataTypes.DECIMAL,
      },

      labor_price: {
        type: DataTypes.DECIMAL,
      },

      name: {
        type: DataTypes.TEXT,
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

  estimate_sections.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.estimate_sections.belongsTo(db.estimates, {
      as: 'related_estimate',
      foreignKey: {
        name: 'related_estimateId',
      },
      constraints: false,
    });

    db.estimate_sections.belongsTo(db.templates, {
      as: 'related_template',
      foreignKey: {
        name: 'related_templateId',
      },
      constraints: false,
    });

    db.estimate_sections.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.estimate_sections.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return estimate_sections;
};
