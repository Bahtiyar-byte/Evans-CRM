const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const crew = sequelize.define(
    'crew',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      color: {
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

  crew.associate = (db) => {
    db.crew.belongsToMany(db.users, {
      as: 'users',
      foreignKey: {
        name: 'crew_usersId',
      },
      constraints: false,
      through: 'crewUsersUsers',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.crew.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.crew.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return crew;
};
