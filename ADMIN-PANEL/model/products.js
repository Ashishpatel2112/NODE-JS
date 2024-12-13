const mongoose = require('mongoose');

const schema = mongoose.Schema({
    extracatid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Extracategorie",
        required:true
    },
    productname:{
        type:String,
        required:true
    },
    productinfo:{
        type:String,
        required:true
    },
    productprice:{
        type:String,
        required:true
    },
    productimage:{
        type:String,
        required:true
    }

})

const product = mongoose.model("product",schema)

module.exports=product;