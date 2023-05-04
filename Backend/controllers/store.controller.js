const { json } = require('express');
const storeService = require('../services/store.service');

module.exports = {
    getStores,
    updateDesignation
}

function getStores(req, res, next) {
    storeService.getStores()
        .then(data => res.json(data))
        .catch(err => res.json({err}));
}

function updateDesignation(req, res, next){
    storeService.updateStoreDesignation(req.body)
        .then(data=>res.json({}))
        .catch(err=>res.json(err))

}