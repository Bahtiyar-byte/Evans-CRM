const { v4: uuid } = require('uuid');

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

    await queryInterface.bulkInsert('roles', [
      {
        id: getId('Administrator'),
        name: 'Administrator',
        createdAt,
        updatedAt,
      },
      { id: getId('User'), name: 'User', createdAt, updatedAt },
    ]);

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

    const entities = [
      'users',
      'contacts',
      'estimates',
      'jobs',
      'roles',
      'permissions',
      'templates',
      'trades',
      'invoices',
      'orders',
      'images',
      'documents',
      'emails',
      'chats',
      'appointments',
      'tasks',
      'contracts',
      'amendments',
      ,
    ];
    await queryInterface.bulkInsert(
      'permissions',
      entities.flatMap(createPermissions),
    );
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`READ_API_DOCS`),
        createdAt,
        updatedAt,
        name: `READ_API_DOCS`,
      },
    ]);
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`CREATE_SEARCH`),
        createdAt,
        updatedAt,
        name: `CREATE_SEARCH`,
      },
    ]);

    await queryInterface.sequelize
      .query(`create table "rolesPermissionsPermissions"
(
"createdAt"           timestamp with time zone not null,
"updatedAt"           timestamp with time zone not null,
"roles_permissionsId" uuid                     not null,
"permissionId"        uuid                     not null,
primary key ("roles_permissionsId", "permissionId")
);`);

    await queryInterface.bulkInsert('rolesPermissionsPermissions', [
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_ESTIMATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_ESTIMATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_ESTIMATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_ESTIMATES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_JOBS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_JOBS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_JOBS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_JOBS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_TEMPLATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_TEMPLATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_TEMPLATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_TEMPLATES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_TRADES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_TRADES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_TRADES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_TRADES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_IMAGES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_IMAGES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_IMAGES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_IMAGES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_CHATS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_CHATS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_CHATS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_CHATS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_CONTRACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_CONTRACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_CONTRACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_CONTRACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_AMENDMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('READ_AMENDMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('UPDATE_AMENDMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('DELETE_AMENDMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('User'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ESTIMATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ESTIMATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ESTIMATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ESTIMATES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_JOBS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_JOBS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_JOBS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_JOBS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ROLES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_PERMISSIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_TEMPLATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_TEMPLATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_TEMPLATES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_TEMPLATES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_TRADES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_TRADES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_TRADES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_TRADES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ORDERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ORDERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_IMAGES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_IMAGES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_IMAGES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_IMAGES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_DOCUMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_DOCUMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_EMAILS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_EMAILS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_CHATS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_CHATS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_CHATS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_CHATS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_TASKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_TASKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_CONTRACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_CONTRACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_CONTRACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_CONTRACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_AMENDMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_AMENDMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_AMENDMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_AMENDMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SEARCH'),
      },
    ]);

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SuperAdmin',
      )}' WHERE "email"='super_admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'Administrator',
      )}' WHERE "email"='admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'User',
      )}' WHERE "email"='client@hello.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'User',
      )}' WHERE "email"='john@doe.com'`,
    );
  },
};
