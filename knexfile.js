// Update with your config settings.
const NODE_ENV = process.env.NODE_ENV
const user = NODE_ENV === 'production' ? 'inventario' : 'root'
const password = NODE_ENV === 'production' ? 'sandunga1000' : 'root'
const database = NODE_ENV === 'production' ? 'inventario' : 'inventario'
const port = NODE_ENV === 'production' ? 3306 : 3306
const host = process.env.MYSQL_SERVICE_HOST


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
