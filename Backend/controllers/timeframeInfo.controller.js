const timeframeInfoService = require('../services/timeframeInfo.service');

module.exports = {
    upload
}

function upload(req, res, next) {
    timeframeInfoService.upload(req.file)
        .then(data => res.json(data))
        .catch(err => next(err));
}