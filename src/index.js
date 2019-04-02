const koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const app = new koa();
const NODE_ENV = process.env.NODE_ENV
const port = NODE_ENV === 'production' ? 8080 : 3000

//importing routes
const dirpath = './controllers/'
const articulos = require(`${dirpath}articulos`)
const edificios = require(`${dirpath}edificios`)
const salones = require(`${dirpath}salones`)
const inventarios = require(`${dirpath}inventarios`)

app.use(cors())
app.use(bodyParser())

app.use(articulos.routes)
app.use(edificios.routes)
app.use(salones.routes)
app.use(inventarios.routes)


const server = app.listen(port, '0.0.0.0', () => {
    console.log(`inventario server running in port ${port}`)
});