const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:String
});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Accounts', schema);