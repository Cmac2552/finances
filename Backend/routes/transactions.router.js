const express = require('express');
const router = express.Router();
const transactions = require('../controllers/transactions.controller');


router.get('/:date', transactions.getTransactions)

module.exports = router;
