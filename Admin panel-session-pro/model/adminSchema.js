const mongoose = require("mongoose");

 const Schema = mongoose.Schema({

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
    city:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    hobby:{
        type:Array,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }

 })

 const Admin = mongoose.model("Admin", Schema);

module.exports = Admin;