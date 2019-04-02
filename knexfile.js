// Update with your config settings.
const NODE_ENV = process.env.NODE_ENV
const user = NODE_ENV === 'production' ? 'inventario' : 'root'
const password = NODE_ENV === 'production' ? 'sandunga1000' : 'root'
const database = NODE_ENV === 'production' ? 'inventario' : 'inventario'
const port = NODE_ENV === 'production' ? 3306 : 3306

console.log(JSON.stringify({
  user: user,
  password: password,
  database: database,
  port: port,
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
          host: '127.0.0.1'
        },
        pool: {
          min: 2,
          max: 10
        }
      } 
};
