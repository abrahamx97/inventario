const knex = require('./connection');
const table = 'inventarios'
const detail_table = 'detalle_inventario'
const singular = 'inventario'

function all(){
    return knex.select('*').from(table).innerJoin('salones', `${table}.id_salon`, 'salones.id_salon').innerJoin('edificios', 'salones.id_edificio', 'edificios.id_edificio')
}

function create(data){
    return knex(table).insert(data, `id_${singular}`)
}

function addDetail(data){
    return knex(detail_table).insert(data)
}

function find(id){
    return knex.select(`${table}.*`, `salones.nombre as salon`, `edificios.nombre as edificio`, `edificios.id_edificio`).from(table).innerJoin('salones', `${table}.id_salon`, 'salones.id_salon').innerJoin('edificios', 'salones.id_edificio', 'edificios.id_edificio').where(`id_${singular}`, id)
}

async function findWithDetail(id){
    let data={}
    let table_data = await knex.select(`${table}.*`, `salones.nombre as salon`, `edificios.nombre as edificio`, `edificios.id_edificio`).from(table).innerJoin('salones', `${table}.id_salon`, 'salones.id_salon').innerJoin('edificios', 'salones.id_edificio', 'edificios.id_edificio').where(`id_${singular}`, id)
    let detail_table_data = await knex(detail_table).innerJoin('articulos', `${detail_table}.id_articulo`, 'articulos.id_articulo').where(`${detail_table}.id_${singular}`, id)
    data[singular] = table_data
    data[detail_table] = detail_table_data
    return data
}

function update(id, data){
    return knex(table).where(`id_${singular}`, id).update(data)
}

function del(id){
    return knex(table).where(`id_${singular}`, id).del()
}

function delDetail(id){
    return knex(detail_table).where(`id_${singular}`, id).del()
}


module.exports={
    all,
    create,
    addDetail,
    find,
    findWithDetail,
    update,
    del,
    delDetail
}