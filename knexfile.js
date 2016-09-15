// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'blog'
    }
  },
  // DIFFERENT WAY TO ACCESS DB
  // client: 'postgresql'
  // connection: 'postgres://localhost/blog'
  //-------------------------------------
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

//-----------------------------------------
production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
