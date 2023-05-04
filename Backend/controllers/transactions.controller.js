const { json } = require('express');
const transactionService = require('../services/transactions.service');

module.exports = {
    getTransactions
}

function getTransactions(req, res, next) {
    transactionService.getTransactions(req.params.date)
        .then(data => res.json(data))
        .catch(err => res.json({err}));
}

