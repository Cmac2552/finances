const { json } = require('express');
const timeframeInfoService = require('../services/timeframeInfo.service');

module.exports = {
    upload,
    getTimeframeInfo
}

function upload(req, res, next) {
    timeframeInfoService.upload(req)
        .then(data => res.json({}))
        .catch(err => res.json({err}));
}

function getTimeframeInfo(req, res, next) {
    timeframeInfoService.getTimeframeInfo(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(err))
}