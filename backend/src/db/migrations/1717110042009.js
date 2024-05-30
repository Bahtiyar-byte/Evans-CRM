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
      await queryInterface.renameColumn('contacts', 'stage', 'status', {
        transaction,
      });

      await queryInterface.addColumn(
        'contacts',
        'firstName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'lastName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'source',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Google Ads', 'Facebook', 'Website', 'Other'],
        },
        { transaction },
      );

      await queryInterface.removeColumn('estimates', 'unit_of_measurement', {
        transaction,
      });

      await queryInterface.addColumn(
        'estimates',
        'related_templateId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'templates',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'jobs',
        'start_date',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'jobs',
        'end_date',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'templates',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'templates',
        'description',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'templates',
        'related_tradeId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'trades',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trades',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'invoices',
        'invoice_number',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'invoices',
        'invoice_date',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'invoices',
        'terms',
        {
          type: Sequelize.DataTypes.ENUM,

          values: [
            'By Due Date',
            'Upon Receipt',
            'Net 7 Days',
            'Net 10 Days',
            'Net 15 Days',
            'Net 30 Days',
            'Net 45 Days',
            'Net 60 Days',
          ],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'invoices',
        'approved_job_value',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'invoices',
        'balance_amount',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'invoices',
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
        'orders',
        'order_number',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'orders',
        'total_amount',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'orders',
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
        'orders',
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
        'amendments',
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
        'amendments',
        'type',
        {
          type: Sequelize.DataTypes.ENUM,

          values: [
            'Change Order',
            'Discount',
            'Insurance Claim',
            'Supplement',
            'Upgrade',
          ],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'amendments',
        'amount',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'amendments',
        'description',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contracts',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contracts',
        'amount',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contracts',
        'body',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contracts',
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
        'contracts',
        'signed_date',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contracts',
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
        'tasks',
        'subject',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'tasks',
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
        'tasks',
        'status',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Open', 'Completed', 'Accepted'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'tasks',
        'priority',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Low', 'Medium', 'High'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'tasks',
        'due_date',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'tasks',
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
        'appointments',
        'subject',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'appointments',
        'start_time',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'appointments',
        'end_time',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'appointments',
        'notes',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'appointments',
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
        'appointments',
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
      await queryInterface.removeColumn('appointments', 'assigned_toId', {
        transaction,
      });

      await queryInterface.removeColumn('appointments', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('appointments', 'notes', {
        transaction,
      });

      await queryInterface.removeColumn('appointments', 'end_time', {
        transaction,
      });

      await queryInterface.removeColumn('appointments', 'start_time', {
        transaction,
      });

      await queryInterface.removeColumn('appointments', 'subject', {
        transaction,
      });

      await queryInterface.removeColumn('tasks', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('tasks', 'due_date', { transaction });

      await queryInterface.removeColumn('tasks', 'priority', { transaction });

      await queryInterface.removeColumn('tasks', 'status', { transaction });

      await queryInterface.removeColumn('tasks', 'assigned_toId', {
        transaction,
      });

      await queryInterface.removeColumn('tasks', 'subject', { transaction });

      await queryInterface.removeColumn('contracts', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('contracts', 'signed_date', {
        transaction,
      });

      await queryInterface.removeColumn('contracts', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('contracts', 'body', { transaction });

      await queryInterface.removeColumn('contracts', 'amount', { transaction });

      await queryInterface.removeColumn('contracts', 'name', { transaction });

      await queryInterface.removeColumn('amendments', 'description', {
        transaction,
      });

      await queryInterface.removeColumn('amendments', 'amount', {
        transaction,
      });

      await queryInterface.removeColumn('amendments', 'type', { transaction });

      await queryInterface.removeColumn('amendments', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('orders', 'related_estimateId', {
        transaction,
      });

      await queryInterface.removeColumn('orders', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('orders', 'total_amount', {
        transaction,
      });

      await queryInterface.removeColumn('orders', 'order_number', {
        transaction,
      });

      await queryInterface.removeColumn('invoices', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('invoices', 'balance_amount', {
        transaction,
      });

      await queryInterface.removeColumn('invoices', 'approved_job_value', {
        transaction,
      });

      await queryInterface.removeColumn('invoices', 'terms', { transaction });

      await queryInterface.removeColumn('invoices', 'invoice_date', {
        transaction,
      });

      await queryInterface.removeColumn('invoices', 'invoice_number', {
        transaction,
      });

      await queryInterface.removeColumn('trades', 'name', { transaction });

      await queryInterface.removeColumn('templates', 'related_tradeId', {
        transaction,
      });

      await queryInterface.removeColumn('templates', 'description', {
        transaction,
      });

      await queryInterface.removeColumn('templates', 'name', { transaction });

      await queryInterface.removeColumn('jobs', 'end_date', { transaction });

      await queryInterface.removeColumn('jobs', 'start_date', { transaction });

      await queryInterface.removeColumn('estimates', 'related_templateId', {
        transaction,
      });

      await queryInterface.addColumn(
        'estimates',
        'unit_of_measurement',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('contacts', 'source', { transaction });

      await queryInterface.removeColumn('contacts', 'lastName', {
        transaction,
      });

      await queryInterface.removeColumn('contacts', 'firstName', {
        transaction,
      });

      await queryInterface.renameColumn('contacts', 'status', 'stage', {
        transaction,
      });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
