// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// Interpretation of object below :-- When the code is in development enviroment, we want use sqlite3 as our DB client. 
// The server can *connect* to this Db at */dev.sqlite3* 
// and we want undefined values to be set to null (See index.js notes)

// Adjust DB from ./dev.squite3 to
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/doggo-land-db.sqlite3'
    },
    useNullAsDefault: true
  }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  //   production: {
  //     client: 'postgresql',
  //     connection: {
  //       database: 'my_db',
  //       user:     'username',
  //       password: 'password'
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: 'knex_migrations'
  //     }
  //   }

  // };

}