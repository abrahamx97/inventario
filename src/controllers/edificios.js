const router = new (require('koa-router'))()
const BASE_PATH = '/edificios/'
const ok = 200, notFound = 404, serverError = 500
const edificios = require('../models/edificios')

router.get(BASE_PATH, async (ctx) => {
    try {
        var result = await edificios.all()
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await edificios.find(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})


router.post(BASE_PATH, async (ctx) => {
    try {
        var edificio = ctx.request.body
        var result = await edificios.create(edificio)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.put(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var edificio = ctx.request.body
        var result = await edificios.update(id, edificio)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.delete(BASE_PATH+':id', async (ctx)=>{
    try {
        var id = ctx.params.id
        var result = await edificios.del(id)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

module.exports = {
    routes: router.routes()
}