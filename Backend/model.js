const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temp1Schema = new Schema({
    money: {type: Number, required: true}
});
temp1Schema.set('toJSON', {virtuals: true});





module.exports = mongoose.model('table1', temp1Schema);
