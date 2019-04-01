function updatedMessage(rowsAffected){
    var status = rowsAffected>-1 ? 'updated' : 'not updated'
    return {status: status}
}

function deletedMessage(rowsAffected){
    var status = rowsAffected>-1 ? 'deleted' : 'not deleted'
    return {status: status}
}

function insertedMessage(rowsAffected){
    var status = rowsAffected>-1 ? 'inserted' : 'not inserted'
    return {status: status}
}

module.exports = {
    deletedMessage,
    updatedMessage,
    insertedMessage
}