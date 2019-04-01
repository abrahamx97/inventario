// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
          database: 'inventario',
          user:     'inventario',
          password: 'sandunga1000',
          port: 3307
        },
        pool: {
          min: 2,
          max: 10
        }
      }

};
