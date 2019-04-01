const koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const port = process.env.port || 3000;
const app = new koa();

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


const server = app.listen(port, () => {
    console.log(`inventario server running in port ${port}`)
});