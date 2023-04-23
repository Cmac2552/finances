const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    systemName: {type: String, required:true},
    designation: {type: String, required:true}
});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Store', schema);