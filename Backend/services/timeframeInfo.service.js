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
    let timeframeInfo = new TimeframeInfo();
    timeframeInfo.income =0;
    timeframeInfo.totalSpent =0;
    let data =[];
    const reader = fs.createReadStream(file.path)
        .pipe(csv())
        .on('data', (row) =>{
            data.push(row);

        })
        .on('end', async ()=>{
            for( let i =0; i < data.length; i++)
            {
                let currentTransaction =data[i]; 
                if(!timeframeInfo.timeframe){
                
                    month = 
                    timeframeInfo.timeframe = new Date(currentTransaction['Trans. Date'])
                        .getUTCMonth() + '/'+
                        new Date(currentTransaction['Trans. Date']).getUTCFullYear();
                }
                let transaction = new Transactions();
                await storeDetermination(currentTransaction).then(store => transaction.store = store);
                transaction.amount = currentTransaction.Amount;
                transaction.transactionDate = new Date(currentTransaction['Trans. Date']).toLocaleString().split(',')[0];
                transaction.timeframeInfo = timeframeInfo;
                if(Number(currentTransaction.Amount) > 0){
                    transaction.save();
                    timeframeInfo.totalSpent = timeframeInfo.totalSpent + Number(currentTransaction.Amount);
                    timeframeInfo.transactions.push(transaction);
                }
            }
            timeframeInfo.save();
        });
}

async function storeDetermination(currentTransaction) {
    let storeName ='';
            let words = currentTransaction.Description.split(' ');
            if (words[0].length > 2){
                storeName = words[0]
            } else {
                storeName = words[0] +' '+words[1]
            } 
            const store = await Store.findOne({systemName:storeName});
            if (store === null){
                newStore = new Store();
                newStore.systemName = storeName;
                newStore.designation = currentTransaction.Category;
                newStore.save()
                return newStore;
            }
            else{
                return store;
            }

}