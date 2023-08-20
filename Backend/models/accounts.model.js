const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{type: String, required: true, unique:true},
    balance:{type: Number, required: true, default:0}
});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Accounts', schema);