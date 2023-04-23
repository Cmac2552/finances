const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString, {useNewUrlParser:true, useUnifiedTopology: true });

module.exports = {
    Store: require('../models/store.model'),
    TimeframeInfo: require('../models/timeframeInfo.model'),
    Transactions: require('../models/transactions.model'),
}