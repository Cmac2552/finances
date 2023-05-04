const db = require('../db/databaseAccess');
const http = require('http');
const csv = require('csv-parser');
const fs = require('fs');
const TimeframeInfo = db.TimeframeInfo;
const Store = db.Store;
const Transactions = db.Transactions;

module.exports = {
    getTransactions

}

async function getTransactions(date){
    return await Transactions.find({transactionDate:date}).populate('store');
}