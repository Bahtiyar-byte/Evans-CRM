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
        'users',
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
        'contacts',
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
        'estimates',
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
        'jobs',
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
        'roles',
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
        'permissions',
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
        'templates',
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
        'trades',
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
        'invoices',
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
        'orders',
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
        'images',
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
        'documents',
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
        'emails',
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
        'chats',
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
        'appointments',
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
        'tasks',
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
        'contracts',
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
        'amendments',
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
        'users',
        'firstName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'lastName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'phoneNumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'email',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'disabled',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'password',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerified',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerificationToken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerificationTokenExpiresAt',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'passwordResetToken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'passwordResetTokenExpiresAt',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'provider',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'app_roleId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'roles',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'email',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'phone',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'address',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'contacts',
        'status',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Lead', 'Prospect', 'Customer'],
        },
        { transaction },
      );

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

      await queryInterface.addColumn(
        'estimates',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
        'description',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
        'trade',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
        'template_used',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
        'material_cost',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
        'labor_cost',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
        'markup',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
        'profit_margin',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
        'total_price',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimates',
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
        'estimates',
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
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'jobs',
        'description',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'jobs',
        'category',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Commercial', 'PropertyManagement', 'Residential'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'jobs',
        'type',
        {
          type: Sequelize.DataTypes.ENUM,

          values: [
            'New',
            'Repair',
            'Service',
            'Warranty',
            'Inspection',
            'Insurance',
            'Retail',
          ],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'jobs',
        'status',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['Quoted', 'Approved', 'Active', 'Completed', 'Invoiced'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'jobs',
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
        'jobs',
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
        'jobs',
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
        'jobs',
        'address',
        {
          type: Sequelize.DataTypes.TEXT,
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
        'roles',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'roles',
        'role_customization',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'permissions',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
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
        'images',
        'Name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'images',
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
        'documents',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'documents',
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
        'emails',
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
        'emails',
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
        'emails',
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
        'chats',
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
        'chats',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
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

      await queryInterface.removeColumn('chats', 'name', { transaction });

      await queryInterface.removeColumn('chats', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('emails', 'related_userId', {
        transaction,
      });

      await queryInterface.removeColumn('emails', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('emails', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('documents', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('documents', 'name', { transaction });

      await queryInterface.removeColumn('images', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('images', 'Name', { transaction });

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

      await queryInterface.removeColumn('permissions', 'name', { transaction });

      await queryInterface.removeColumn('roles', 'role_customization', {
        transaction,
      });

      await queryInterface.removeColumn('roles', 'name', { transaction });

      await queryInterface.removeColumn('jobs', 'end_date', { transaction });

      await queryInterface.removeColumn('jobs', 'start_date', { transaction });

      await queryInterface.removeColumn('jobs', 'address', { transaction });

      await queryInterface.removeColumn('jobs', 'related_estimateId', {
        transaction,
      });

      await queryInterface.removeColumn('jobs', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('jobs', 'assigned_toId', {
        transaction,
      });

      await queryInterface.removeColumn('jobs', 'status', { transaction });

      await queryInterface.removeColumn('jobs', 'type', { transaction });

      await queryInterface.removeColumn('jobs', 'category', { transaction });

      await queryInterface.removeColumn('jobs', 'description', { transaction });

      await queryInterface.removeColumn('jobs', 'name', { transaction });

      await queryInterface.removeColumn('estimates', 'related_templateId', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'related_jobId', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'related_contactId', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'total_price', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'profit_margin', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'markup', { transaction });

      await queryInterface.removeColumn('estimates', 'labor_cost', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'material_cost', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'template_used', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'trade', { transaction });

      await queryInterface.removeColumn('estimates', 'description', {
        transaction,
      });

      await queryInterface.removeColumn('estimates', 'name', { transaction });

      await queryInterface.removeColumn('contacts', 'source', { transaction });

      await queryInterface.removeColumn('contacts', 'lastName', {
        transaction,
      });

      await queryInterface.removeColumn('contacts', 'firstName', {
        transaction,
      });

      await queryInterface.removeColumn('contacts', 'status', { transaction });

      await queryInterface.removeColumn('contacts', 'address', { transaction });

      await queryInterface.removeColumn('contacts', 'phone', { transaction });

      await queryInterface.removeColumn('contacts', 'email', { transaction });

      await queryInterface.removeColumn('contacts', 'name', { transaction });

      await queryInterface.removeColumn('users', 'app_roleId', { transaction });

      await queryInterface.removeColumn('users', 'provider', { transaction });

      await queryInterface.removeColumn(
        'users',
        'passwordResetTokenExpiresAt',
        { transaction },
      );

      await queryInterface.removeColumn('users', 'passwordResetToken', {
        transaction,
      });

      await queryInterface.removeColumn(
        'users',
        'emailVerificationTokenExpiresAt',
        { transaction },
      );

      await queryInterface.removeColumn('users', 'emailVerificationToken', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'emailVerified', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'password', { transaction });

      await queryInterface.removeColumn('users', 'disabled', { transaction });

      await queryInterface.removeColumn('users', 'email', { transaction });

      await queryInterface.removeColumn('users', 'phoneNumber', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'lastName', { transaction });

      await queryInterface.removeColumn('users', 'firstName', { transaction });

      await queryInterface.dropTable('amendments', { transaction });

      await queryInterface.dropTable('contracts', { transaction });

      await queryInterface.dropTable('tasks', { transaction });

      await queryInterface.dropTable('appointments', { transaction });

      await queryInterface.dropTable('chats', { transaction });

      await queryInterface.dropTable('emails', { transaction });

      await queryInterface.dropTable('documents', { transaction });

      await queryInterface.dropTable('images', { transaction });

      await queryInterface.dropTable('orders', { transaction });

      await queryInterface.dropTable('invoices', { transaction });

      await queryInterface.dropTable('trades', { transaction });

      await queryInterface.dropTable('templates', { transaction });

      await queryInterface.dropTable('permissions', { transaction });

      await queryInterface.dropTable('roles', { transaction });

      await queryInterface.dropTable('jobs', { transaction });

      await queryInterface.dropTable('estimates', { transaction });

      await queryInterface.dropTable('contacts', { transaction });

      await queryInterface.dropTable('users', { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
