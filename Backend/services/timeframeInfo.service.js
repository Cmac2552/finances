const db = require('../db/databaseAccess');
const http = require('http');
const csv = require('csv-parser');
const fs = require('fs');
const TimeframeInfo = db.TimeframeInfo;
const Store = db.Store;
const Transactions = db.Transactions;

module.exports = {
    upload
}

async function upload({file}){
    console.log(file);
    fs.createReadStream(file.path)
        .pipe(csv())
        .on('data', (row) =>
        {
        
            let transaction = new Transactions();
            transaction.store
            let words = row.description.split(' ');
            if (words[0].length > 2){
                transaction.store = words[0]
            } else {
                transaction.store = words[0] +' '+words[1]
            }
            console.log(row);
        })
        .on('end', () =>
        {
            console.log("Done");
        });
   
}