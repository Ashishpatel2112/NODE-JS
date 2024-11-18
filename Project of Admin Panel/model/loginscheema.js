const mongoose = require("mongoose");

const login = mongoose.Schema({
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
    }
})

const logindata = mongoose.model("logindata",login)

module.exports=logindata;