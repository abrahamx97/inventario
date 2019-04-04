const knex = require('./connection');
const table = 'ventas'
const tableDetalle = 'detalle_ventas'
const singular = 'venta'

function all(){
    return knex.select('*').from(table)
}

function allDetalle(){
    return knex.select('*').from(tableDetalle)
}

function create(data){
    return knex(table).insert(data)
}

function createDetalle(data){
    return knex(tableDetalle).insert(data)
}

function find(id){
    return knex(table).where(`cve_${singular}`, id)
}

function update(id, data){
    return knex(table).where(`cve_${singular}`, id).update(data)
}

function del(id){
    return knex(table).where(`cve_${singular}`, id).del()
}

module.exports={
    all,
    allDetalle,
    create,
    createDetalle,
    find,
    update,
    del
}