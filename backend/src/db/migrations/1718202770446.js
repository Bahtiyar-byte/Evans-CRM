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
      await queryInterface.addColumn(
        'appointments',
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

      await queryInterface.removeColumn('appointments', 'related_contactId', {
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

      await queryInterface.removeColumn('appointments', 'related_jobId', {
        transaction,
      });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
