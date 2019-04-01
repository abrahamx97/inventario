const router = new (require('koa-router'))()
const BASE_PATH = '/articulos/'
const ok = 200, notFound = 404, serverError = 500
const articulos = require('../models/articulos')

router.get(BASE_PATH, async (ctx) => {
    try {
        var result = await articulos.all()
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await articulos.find(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.post(BASE_PATH, async (ctx) => {
    try {
        var articulo = ctx.request.body
        var result = await articulos.create(articulo)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.put(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var articulo = ctx.request.body
        var result = await articulos.update(id, articulo)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.delete(BASE_PATH+':id', async (ctx)=>{
    try {
        var id = ctx.params.id
        console.log(`id_articulo ${id}`)
        var result = await articulos.del(id)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

module.exports = {
    routes: router.routes()
}