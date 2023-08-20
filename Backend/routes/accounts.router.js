const express = require('express');
const router = express.Router();
const accounts= require('../controllers/accounts.controller');


router.get('/', accounts.getAccounts)
router.post('/create-account', accounts.createAccount);
router.post('/update-balance', accounts.updateBalance);

module.exports = router;