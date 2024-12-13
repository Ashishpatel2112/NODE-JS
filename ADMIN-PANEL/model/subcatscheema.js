const mongoose = require('mongoose');

const schema = mongoose.Schema({
    subcatname:{
        type:String,
        required:true
    },
    categoryid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categorie",
        required:true
    }
})

const subcategory = mongoose.model("Subcategorie",schema)

module.exports=subcategory;