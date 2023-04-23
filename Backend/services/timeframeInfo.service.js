const db = require('../db/databaseAccess');
const http = require('http');
const csv = require('csv-parser');
const fs = require('fs');
const TimeframeInfo = db.TimeframeInfo;
const Store = db.Store;
const transactions = db.Transactions;

module.exports = {
    upload
}

async function upload({file}){
    console.log(file);
    fs.createReadStream(file.path)
        .pipe(csv())
        .on('data', (row) =>
        {
            console.log(row);
        })
        .on('end', () =>
        {
            console.log("Done");
        });
   
}