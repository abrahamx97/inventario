const knex = require('./connection');
const table = 'platillos'
const singular = 'platillo'

function all(){
    return knex.select('*').from(table)
}

function findByCagoriaPlatillo(cve_categoria_platillo){
    return knex.select('*').from(table).where('cve_categoria_platillo', cve_categoria_platillo)
}

function create(data){
    return knex(table).insert(data)
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
    create,
    find,
    update,
    del,
    findByCagoriaPlatillo
}