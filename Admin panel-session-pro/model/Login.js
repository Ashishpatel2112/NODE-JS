const mongoose = require("mongoose");

const user = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})

const data=mongoose.model("logindata",user)

module.exports=data;