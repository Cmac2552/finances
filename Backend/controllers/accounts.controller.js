const accountService = require('../services/accounts.service');

module.exports = {
    getAccounts,
    createAccount
}

function getAccounts(req, res, next) {
    accountService.getAccounts()
        .then(data => res.json(data))
        .catch(err => res.json({err}));
}

function createAccount(req, res, next){
    accountService.createAccount(req.body)
        .then(data=>res.json({}))
        .catch(err=>res.json(err))

}