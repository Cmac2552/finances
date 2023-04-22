const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    systemName: {type: String, required:true},
    colinName: {type: String, required:true, unique:true},
    designation: {type: String, required:true},
    limit: {type: Number}
});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Store', schema);