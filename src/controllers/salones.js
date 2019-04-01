const router = new (require('koa-router'))()
const BASE_PATH = '/salones/'
const ok = 200, notFound = 404, serverError = 500
const salones = require('../models/salones')

router.get(BASE_PATH, async (ctx) => {
    try {
        var result = await salones.all()
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await salones.find(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + 'edificio/:id', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await salones.findByEdificio(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.post(BASE_PATH, async (ctx) => {
    try {
        var salon = ctx.request.body
        var result = await salones.create(salon)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.put(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var salon = ctx.request.body
        var result = await salones.update(id, salon)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.delete(BASE_PATH+':id', async (ctx)=>{
    try {
        var id = ctx.params.id
        var result = await salones.del(id)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

module.exports = {
    routes: router.routes()
}