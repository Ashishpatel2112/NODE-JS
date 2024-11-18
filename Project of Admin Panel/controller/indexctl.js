const tasks = require("../model/schema");
const logindata = require("../model/loginscheema");

module.exports.login= async (req,res)=>{
    res.render("login")
}
module.exports.register= async (req,res)=>{
    res.render("register")
}
module.exports.logindata=async(req,res)=>{
    let data = await logindata.create(req.body)
    data&&res.redirect("home")
}
module.exports.loginuser=async(req,res)=>{
    let user =await logindata.findOne({"email":req.body.email})
    if(!user){
       return console.log("USER NOT FOUND");
    }
    if(req.body.password == user.password){
        res.cookie("userdata",user);
        res.redirect("home")
    }
}
module.exports.home= async (req,res)=>{
   let user = req.cookies.userdata
    user ? res.render("home"):res.redirect("/");
}
module.exports.card= async (req,res)=>{
    let user = req.cookies.userdata
    user?res.render("card"):res.redirect("/");
}
module.exports.added= async(req,res)=>{
    if(req.cookies.userdata){
    req.body.userid=req.cookies.userdata._id
        let data= await tasks.create(req.body);
        data&&res.redirect("addtask")
    }else{
        res.redirect("/");
    }
}
module.exports.addtask= async (req,res)=>{
    if (req.cookies.userdata) {
        res.render("addtask")
    } else {
        res.redirect("/");
    }
}
module.exports.viewtask= async (req,res)=>{

    if (req.cookies.userdata) {
        let data = await tasks.find({});
        
        let finaldata = data.filter(item => item.userid == req.cookies.userdata._id )
        
         res.render("viewtask",{finaldata})


    } else {
        res.redirect("/");
    }
}
module.exports.edittask=async(req,res)=>{
    if (req.cookies.userdata) {
        let data = await tasks.findById(req.query.id)
        data && res.render("edittask",{data})
        
    } else {
    res.redirect("/");    
    }
}
module.exports.update=async(req,res)=>{
    let data = await tasks.findByIdAndUpdate(req.body.id,req.body)
    data&&res.redirect("viewtask")
}

module.exports.deletetask=async(req,res)=>{
    let data = await tasks.findByIdAndDelete(req.query.id);
    data && res.redirect("viewtask");
}
module.exports.login= async (req,res)=>{
    res.render("login")
}
module.exports.register= async (req,res)=>{
    res.render("register")
}
module.exports.logout=async(req,res)=>{
    res.clearCookie("userdata");
    res.redirect("/");
}
