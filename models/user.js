var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
    input: { type: Array, default: '' },
  
},
    { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);