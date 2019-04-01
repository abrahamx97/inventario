const knex = require('./connection');
const table = 'articulos'
const singular = 'articulo'

function all(){
    return knex.select('*').from(table)
}

function create(data){
    return knex(table).insert(data)
}

function find(id){
    return knex(table).where(`id_${singular}`, id)
}

function update(id, data){
    return knex(table).where(`id_${singular}`, id).update(data)
}

function del(id){
    return knex(table).where(`id_${singular}`, id).del()
}

module.exports={
    all,
    create,
    find,
    update,
    del
}