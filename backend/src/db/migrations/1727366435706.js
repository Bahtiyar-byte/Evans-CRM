module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async up(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'labor_ticket',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'crew',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'subcontractor',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'history',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'address',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'related_jobId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'jobs',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'start_date',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'end_date',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'crew',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'crew',
        'color',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'crew_instructions',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'actual_start_time',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'actual_end_time',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'crew_actions',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Not Checked In', 'Checked In', 'Postponed'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'labor_progress',
        {
          type: Sequelize.DataTypes.ENUM,

          values: [
            'Working',
            'Cancelled ',
            'Delayed',
            'Completed',
            'Partially Complete',
          ],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'disclaimer',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'subcontractor',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'subcontractor',
        'first_name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'subcontractor',
        'last_name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'subcontractor',
        'address',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'subcontractor',
        'phone',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'subcontractor',
        'mobile_phone',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'subcontractor',
        'entity_name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'assigned_date',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'related_estimateId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'estimates',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'related_invoiceId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'invoices',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'related_jobId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'jobs',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'related_emailId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'emails',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'related_labor_ticketId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'labor_ticket',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'related_userId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'users',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'templates',
        'is_email_template',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'assigned_toId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'users',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'category',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Commercial', 'Residential', 'Property Management'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'work_type',
        {
          type: Sequelize.DataTypes.ENUM,

          values: [
            'New',
            'Repair',
            'Service',
            'Retail',
            'Insurance',
            'Warranty ',
            'Inspection',
          ],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'referral',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'company',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'images',
        'related_contactId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'contacts',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'documents',
        'related_contactId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'contacts',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'isActive',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'isVerified',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'street',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'suite_apt_unit',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'city',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'state',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['AL', 'AK', 'AZ', 'AR', 'AS'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'zip',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'country',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['USA'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'related_contactId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'contacts',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'is_mailing_address',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'is_location',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'is_billing_Address',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'address',
        'related_jobId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'jobs',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'action_description',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'related_contactId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'contacts',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'history',
        'related_appointmentId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'appointments',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'labor_ticket',
        'related_orderId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'orders',
            key: 'id',
          },
        },
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async down(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('labor_ticket', 'related_orderId', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'related_appointmentId', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'action_description', {
        transaction,
      });

      await queryInterface.removeColumn('address', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('address', 'is_billing_Address', {
        transaction,
      });

      await queryInterface.removeColumn('address', 'is_location', {
        transaction,
      });

      await queryInterface.removeColumn('address', 'is_mailing_address', {
        transaction,
      });

      await queryInterface.removeColumn('address', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('address', 'country', { transaction });

      await queryInterface.removeColumn('address', 'zip', { transaction });

      await queryInterface.removeColumn('address', 'state', { transaction });

      await queryInterface.removeColumn('address', 'city', { transaction });

      await queryInterface.removeColumn('address', 'suite_apt_unit', {
        transaction,
      });

      await queryInterface.removeColumn('address', 'street', { transaction });

      await queryInterface.removeColumn('users', 'isVerified', { transaction });

      await queryInterface.removeColumn('users', 'isActive', { transaction });

      await queryInterface.removeColumn('documents', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('images', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('contacts', 'company', { transaction });

      await queryInterface.removeColumn('contacts', 'referral', {
        transaction,
      });

      await queryInterface.removeColumn('contacts', 'work_type', {
        transaction,
      });

      await queryInterface.removeColumn('contacts', 'category', {
        transaction,
      });

      await queryInterface.removeColumn('contacts', 'assigned_toId', {
        transaction,
      });

      await queryInterface.removeColumn('templates', 'is_email_template', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'related_userId', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'related_labor_ticketId', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'related_emailId', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'related_invoiceId', {
        transaction,
      });

      await queryInterface.removeColumn('history', 'related_estimateId', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'assigned_date', {
        transaction,
      });

      await queryInterface.removeColumn('subcontractor', 'entity_name', {
        transaction,
      });

      await queryInterface.removeColumn('subcontractor', 'mobile_phone', {
        transaction,
      });

      await queryInterface.removeColumn('subcontractor', 'phone', {
        transaction,
      });

      await queryInterface.removeColumn('subcontractor', 'address', {
        transaction,
      });

      await queryInterface.removeColumn('subcontractor', 'last_name', {
        transaction,
      });

      await queryInterface.removeColumn('subcontractor', 'first_name', {
        transaction,
      });

      await queryInterface.removeColumn('subcontractor', 'name', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'disclaimer', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'labor_progress', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'crew_actions', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'actual_end_time', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'actual_start_time', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'crew_instructions', {
        transaction,
      });

      await queryInterface.removeColumn('crew', 'color', { transaction });

      await queryInterface.removeColumn('crew', 'name', { transaction });

      await queryInterface.removeColumn('labor_ticket', 'end_date', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'start_date', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('labor_ticket', 'name', {
        transaction,
      });

      await queryInterface.dropTable('address', { transaction });

      await queryInterface.dropTable('history', { transaction });

      await queryInterface.dropTable('subcontractor', { transaction });

      await queryInterface.dropTable('crew', { transaction });

      await queryInterface.dropTable('labor_ticket', { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
