const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    store: {type: Schema.Types.ObjectId, ref: 'Store',required:true},
    amount: {type: Number, required:true},
    transactionDate: {type: String, required:true},
    timeframeInfo: {type: Schema.Types.ObjectId, ref:'TimeframeInfo', required:true}
});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Transactions', schema);