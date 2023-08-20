const db = require('../db/databaseAccess');
const Account = db.Accounts;


module.exports = {
    getAccounts,
    createAccount
}

async function getAccounts(){
    return await Account.find();
}

async function createAccount(account){
    let newAccount = new Account()
    newAccount.name = account.name
    return await newAccount.save();
}