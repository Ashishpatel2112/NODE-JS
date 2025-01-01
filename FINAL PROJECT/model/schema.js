const mongoose = require('mongoose')

const schema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    }
})

const blog = mongoose.model("Blog",schema)

module.exports=blog