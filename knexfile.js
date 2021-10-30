// Update with your config settings.
module.exports = {
  client: 'pg',
  version: '12.8',
  connection: {
      host: 'ec2-52-25-253-110.us-west-2.compute.amazonaws.com',
      database: 'tasks',
      user: 'ubuntu',
      password: 'password',
      port: 5432,
      connectTimeout: 90000
  },
  pool: {
      min: 2,
      max: 20
  },
  migrations: {
      tableName: 'knex_migrations'
  }
};