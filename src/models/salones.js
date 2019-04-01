const knex = require('./connection');
const table = 'salones'
const singular = 'salon'

function all(){
    return knex.select('*').from(table)
}

function create(data){
    return knex(table).insert(data)
}

function find(id){
    return knex(table).where(`id_${singular}`, id)
}

function findByEdificio(id_edificio){
    return knex(table).where(`id_edificio`, id_edificio)
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
    findByEdificio,
    update,
    del
}