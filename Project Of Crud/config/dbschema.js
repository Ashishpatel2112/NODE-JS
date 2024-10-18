const mongoose = require('mongoose');

const schema= mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    author:{
        type: 'string',
        required: true
    },
    price:{
        type: 'string',
        required: true
    }
});

const admin = mongoose.model("data",schema);

module.exports = admin;