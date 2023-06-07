const mongoose = require('mongoose');
const roomSchema = mongoose.Schema({
    name:String,
    age:Number
});

module.exports= mongoose.model('room', roomSchema);