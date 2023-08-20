const db = require('../db/databaseAccess');
const Account = db.Accounts;


module.exports = {
    getAccounts,
    createAccount,
    updateBalance
}

async function getAccounts(){
    return await Account.find();
}

async function createAccount(account){
    let newAccount = new Account();
    Object.keys(account).forEach((key)=>{
        newAccount[key] = account[key];
    })
    // newAccount.name = account.name
    return await newAccount.save();
}

async function updateBalance(newBalance){
    console.log(newBalance);
    return await Account.updateOne({name:newBalance.name}, {$set:{balance:newBalance.balance}});
    
}