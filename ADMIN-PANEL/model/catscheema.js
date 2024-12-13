const mongoose = require('mongoose');

const schema = mongoose.Schema({
    catname:{
        type:String,
        required:true
    }
})

const category = mongoose.model("categorie",schema)

module.exports=category;