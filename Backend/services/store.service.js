const db = require('../db/databaseAccess');
const Store = db.Store;


module.exports = {
    getStores,
    updateStoreDesignation

}

async function getStores(){
    return await Store.find();
}

async function updateStoreDesignation(store){

    return await Store.updateOne({systemName: store.systemName}, {$set:{designation: store.designation}})
}