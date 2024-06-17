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
        'estimate_sections',
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
        'estimates',
        'status',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['New', 'Approved', 'Sent'],
        },
        { transaction },
      );

      await queryInterface.removeColumn('estimates', 'related_templateId', {
        transaction,
      });

      await queryInterface.addColumn(
        'estimate_sections',
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
        'estimate_sections',
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
        'estimate_sections',
        'amount',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimate_sections',
        'material_price',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimate_sections',
        'labor_price',
        {
          type: Sequelize.DataTypes.DECIMAL,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimate_sections',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'estimate_sections',
        'description',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('jobs', 'related_estimateId', {
        transaction,
      });

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

      await queryInterface.removeColumn('estimate_sections', 'description', {
        transaction,
      });

      await queryInterface.removeColumn('estimate_sections', 'name', {
        transaction,
      });

      await queryInterface.removeColumn('estimate_sections', 'labor_price', {
        transaction,
      });

      await queryInterface.removeColumn('estimate_sections', 'material_price', {
        transaction,
      });

      await queryInterface.removeColumn('estimate_sections', 'amount', {
        transaction,
      });

      await queryInterface.removeColumn(
        'estimate_sections',
        'related_templateId',
        { transaction },
      );

      await queryInterface.removeColumn(
        'estimate_sections',
        'related_estimateId',
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

      await queryInterface.removeColumn('estimates', 'status', { transaction });

      await queryInterface.removeColumn('appointments', 'related_contactId', {
        transaction,
      });

      await queryInterface.dropTable('estimate_sections', { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
