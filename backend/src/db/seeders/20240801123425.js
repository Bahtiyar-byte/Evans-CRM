const { v4: uuid } = require('uuid');
const db = require('../models');
const Sequelize = require('sequelize');
const config = require('../../config');

module.exports = {
  /**
   * @param{import("sequelize").QueryInterface} queryInterface
   * @return {Promise<void>}
   */
  async up(queryInterface) {
    const createdAt = new Date();
    const updatedAt = new Date();

    /** @type {Map<string, string>} */
    const idMap = new Map();

    /**
     * @param {string} key
     * @return {string}
     */
    function getId(key) {
      if (idMap.has(key)) {
        return idMap.get(key);
      }
      const id = uuid();
      idMap.set(key, id);
      return id;
    }

    /**
     * @param {string} name
     */
    function createPermissions(name) {
      return [
        {
          id: getId(`CREATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `CREATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`READ_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `READ_${name.toUpperCase()}`,
        },
        {
          id: getId(`UPDATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `UPDATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`DELETE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `DELETE_${name.toUpperCase()}`,
        },
      ];
    }

    const entities = ['contact_emails'];

    const createdPermissions = entities.flatMap(createPermissions);

    // Add permissions to database
    await queryInterface.bulkInsert('permissions', createdPermissions);
    // Get permissions ids
    const permissionsIds = createdPermissions.map((p) => p.id);
    // Get admin role
    const adminRole = await db.roles.findOne({
      where: { name: config.roles.admin },
    });

    if (adminRole) {
      // Add permissions to admin role if it exists
      await adminRole.addPermissions(permissionsIds);
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'permissions',
      entities.flatMap(createPermissions),
    );
  },
};
