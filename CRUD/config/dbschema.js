const mongoose = require('mongoose');

const schema= mongoose.Schema({
    name: {
        type: String,
    required: true},

    age :{
        type : String,
        required: true
    },

    email: {
        type: String,
    required: true},


})

const admin = mongoose.model('cruddata',schema);

module.exports = admin;