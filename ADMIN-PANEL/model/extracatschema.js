const mongoose = require('mongoose');

const schema = mongoose.Schema({
    extracatname:{
        type:String,
        required:true
    },
    subcatid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Subcategorie",
        required:true
    }
})

const extracategory = mongoose.model("Extracategorie",schema)

module.exports=extracategory;