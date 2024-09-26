const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const subcontractor = sequelize.define(
    'subcontractor',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      first_name: {
        type: DataTypes.TEXT,
      },

      last_name: {
        type: DataTypes.TEXT,
      },

      address: {
        type: DataTypes.TEXT,
      },

      phone: {
        type: DataTypes.TEXT,
      },

      mobile_phone: {
        type: DataTypes.TEXT,
      },

      entity_name: {
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

  subcontractor.associate = (db) => {
    db.subcontractor.belongsToMany(db.documents, {
      as: 'related_documents',
      foreignKey: {
        name: 'subcontractor_related_documentsId',
      },
      constraints: false,
      through: 'subcontractorRelated_documentsDocuments',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.subcontractor.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.subcontractor.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return subcontractor;
};
