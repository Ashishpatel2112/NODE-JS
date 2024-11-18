const mongoose=require("mongoose");

const task= mongoose.Schema({

    email:{
        type:String,
        required:true,
    },
    task:{
        type:String,
        required:true,
    },
    deadline:{
        type:String,
        required:true,
    },
    userid:{
        type:String,
        required:true
    }
})



const taskscheema = mongoose.model("Tasks",task)

module.exports=taskscheema;
