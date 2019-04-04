const router = new (require('koa-router'))()
const BASE_PATH = '/ventas/'
const BASE_PATH_DETALLES = 'detalles'
const ok = 200, notFound = 404, serverError = 500
const ventas = require('../models/ventas')

router.get(BASE_PATH, async (ctx) => {
    try {
        var result = await ventas.all()
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})
router.get(BASE_PATH+BASE_PATH_DETALLES, async (ctx) => {
    try {
        var result = await ventas.allDetalle()
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await ventas.find(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.post(BASE_PATH, async (ctx) => {
    try {
        var venta = ctx.request.body
        var result = await ventas.create(venta)
        result = Array.isArray(result) ? result.shift() : -1
        ctx.body = {cve_venta: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})
router.post(BASE_PATH+BASE_PATH_DETALLES, async (ctx) => {
    try {
        var detalleVenta = ctx.request.body
        var result = await ventas.createDetalle(detalleVenta)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        console.log(error)
        ctx.status = serverError
    }
})

router.put(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var venta = ctx.request.body
        var result = await ventas.update(id, venta)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.delete(BASE_PATH+':id', async (ctx)=>{
    try {
        var id = ctx.params.id
        console.log(`id_venta ${id}`)
        var result = await ventas.del(id)
        ctx.body = {rowsAffected: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

module.exports = {
    routes: router.routes()
}