const router = new (require('koa-router'))()
const BASE_PATH = '/platillos/'
const ok = 200, notFound = 404, serverError = 500
const platillos = require('../models/platillos')

router.get(BASE_PATH, async (ctx) => {
    try {
        var result = await platillos.all()
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + 'categoria/:id', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await platillos.findByCagoriaPlatillo(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await platillos.find(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.post(BASE_PATH, async (ctx) => {
    try {
        var platillo = ctx.request.body
        var result = await platillos.create(platillo)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.put(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var platillo = ctx.request.body
        var result = await platillos.update(id, platillo)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.delete(BASE_PATH+':id', async (ctx)=>{
    try {
        var id = ctx.params.id
        var result = await platillos.del(id)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

module.exports = {
    routes: router.routes()
}