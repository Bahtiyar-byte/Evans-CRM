const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const labor_ticket = sequelize.define(
    'labor_ticket',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      start_date: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('start_date')
            ? moment.utc(this.getDataValue('start_date')).format('YYYY-MM-DD')
            : null;
        },
      },

      end_date: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('end_date')
            ? moment.utc(this.getDataValue('end_date')).format('YYYY-MM-DD')
            : null;
        },
      },

      crew_instructions: {
        type: DataTypes.TEXT,
      },

      actual_start_time: {
        type: DataTypes.DATE,
      },

      actual_end_time: {
        type: DataTypes.DATE,
      },

      crew_actions: {
        type: DataTypes.ENUM,

        values: ['Not Checked In', 'Checked In', 'Postponed'],
      },

      labor_progress: {
        type: DataTypes.ENUM,

        values: [
          'Working',

          'Cancelled ',

          'Delayed',

          'Completed',

          'Partially Complete',
        ],
      },

      disclaimer: {
        type: DataTypes.TEXT,
      },

      assigned_date: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('assigned_date')
            ? moment
                .utc(this.getDataValue('assigned_date'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  labor_ticket.associate = (db) => {
    db.labor_ticket.belongsToMany(db.images, {
      as: 'related_images',
      foreignKey: {
        name: 'labor_ticket_related_imagesId',
      },
      constraints: false,
      through: 'labor_ticketRelated_imagesImages',
    });

    db.labor_ticket.belongsToMany(db.documents, {
      as: 'related_document',
      foreignKey: {
        name: 'labor_ticket_related_documentId',
      },
      constraints: false,
      through: 'labor_ticketRelated_documentDocuments',
    });

    db.labor_ticket.belongsToMany(db.crew, {
      as: 'assigned_crew',
      foreignKey: {
        name: 'labor_ticket_assigned_crewId',
      },
      constraints: false,
      through: 'labor_ticketAssigned_crewCrew',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.labor_ticket.hasMany(db.history, {
      as: 'history_related_labor_ticket',
      foreignKey: {
        name: 'related_labor_ticketId',
      },
      constraints: false,
    });

    //end loop

    db.labor_ticket.belongsTo(db.jobs, {
      as: 'related_job',
      foreignKey: {
        name: 'related_jobId',
      },
      constraints: false,
    });

    db.labor_ticket.belongsTo(db.orders, {
      as: 'related_order',
      foreignKey: {
        name: 'related_orderId',
      },
      constraints: false,
    });

    db.labor_ticket.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.labor_ticket.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return labor_ticket;
};
