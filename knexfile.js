// Update with your config settings.
const NODE_ENV = process.env.NODE_ENV
const user = NODE_ENV === 'production' ? process.env.DB_USER : 'root'
const password = NODE_ENV === 'production' ? process.env.DB_PASSWORD : 'root'
const database = NODE_ENV === 'production' ? process.env.DB_NAME : 'inventario'
const port = NODE_ENV === 'production' ? process.env.MYSQL_SERVICE_PORT : 3306
const host = NODE_ENV === 'production' ? process.env.MYSQL_SERVICE_HOST : '127.0.0.1'

console.log(JSON.stringify({
  user: user,
  password: password,
  database: database,
  port: port,
  host: host,
  NODE_ENV: NODE_ENV
}))


module.exports = {

    development: {
        client: 'mysql',
        connection: {
          database: database,
          user:     user,
          password: password,
          port: port,
          host: host
        },
        pool: {
          min: 2,
          max: 10
        }
      } ,
      production: {
        client: 'mysql',
        connection: {
          database: database,
          user:     user,
          password: password,
          port: port,
          host: host
        },
        pool: {
          min: 2,
          max: 10
        }
      } 
};
