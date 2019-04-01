const router = new (require('koa-router'))()
const BASE_PATH = '/inventarios/'
const ok = 200, notFound = 404, serverError = 500
const inventarios = require('../models/inventarios')
const util = require('../util')

router.get(BASE_PATH, async (ctx) => {
    try {
        var result = await inventarios.all()
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await inventarios.find(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.get(BASE_PATH + ':id/detail', async (ctx) => {
    try {
        var id = ctx.params.id
        var result = await inventarios.findWithDetail(id)
        ctx.body = {data: result}
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.post(BASE_PATH, async (ctx) => {
    try {
        var inventario = ctx.request.body
        var result = await inventarios.create(inventario)
        ctx.body = util.insertedMessage(result)
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.post(BASE_PATH+'detail', async (ctx) => {
    try {
        var inventario = ctx.request.body.inventario    //it's a hash
        var detalle = ctx.request.body.detalle          //it's a array of hashes
        var id = await inventarios.create(inventario)
        var result = 0
        if(id>0){
            detalle = detalle.map(element=>{
                element['id_inventario'] = id
                return element
            })
            result =  await inventarios.addDetail(detalle)
        }
        ctx.body = util.insertedMessage(result)
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.put(BASE_PATH + ':id', async (ctx) => {
    try {
        var id = ctx.params.id
        var inventario = ctx.request.body
        var result = await inventarios.update(id, inventario)
        ctx.body = util.updatedMessage(result)
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

router.put(BASE_PATH + ':id/detail', async (ctx) => {
    try {
        var id = ctx.params.id
        var inventario = ctx.request.body.inventario
        var detalle = ctx.request.body.detalle
        var result = await inventarios.update(id, inventario)
        result = await inventarios.delDetail(id)
        result = await inventarios.addDetail(detalle)
        ctx.body = util.updatedMessage(result)
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})


//delete on cascade
router.delete(BASE_PATH+':id', async (ctx)=>{
    try {
        var id = ctx.params.id
        var result = await inventarios.del(id)
        ctx.body = util.deletedMessage(result)
        ctx.status = ok
    } catch (error) {
        ctx.status = serverError
    }
})

module.exports = {
    routes: router.routes()
}