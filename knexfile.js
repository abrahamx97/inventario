// Update with your config settings.
const NODE_ENV = process.env.NODE_ENV
const user = NODE_ENV === 'production' ? process.env.DB_USER : 'root'
const password = NODE_ENV === 'production' ? process.env.DB_PASSWORD : 'root'
const database = NODE_ENV === 'production' ? process.env.DB_NAME : 'inventario'
const port = NODE_ENV === 'production' ? 3306 : 3306

module.exports = {

    development: {
        client: 'mysql',
        connection: {
          database: database,
          user:     user,
          password: password,
          port: port,
          host: '127.0.0.1'
        },
        pool: {
          min: 2,
          max: 10
        }
      } 
};
