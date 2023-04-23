const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    timeframe: {type: String, required:true, unique: true},
    income: {type: Number, required:true},
    totalSpent: {type: Number, required:true},
    transactions: [{type: Schema.Types.ObjectId, ref:'Transactions'}]
});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('TimeframeInfo', schema);