let admin = require("../model/adminSchema")
const userdata= require("../model/Login");
const fs = require("fs");

module.exports.login=async(req,res)=>{
    res.render("login")
}
module.exports.register=async(req,res)=>{
    res.render("register")
}

module.exports.useradd=async(req,res)=>{
   let data= await userdata.create(req.body)
   data&&res.redirect("/");
}
module.exports.added=async(req,res)=>{
    let user = await userdata.findOne({"email":req.body.email})
    
    user && res.render("home")
    
}

module.exports.homepage = async(req,res)=>{
    res.render("home")
}

module.exports.addadmin = async(req,res)=>{
    res.render("addadmin")
}
module.exports.insert=async(req,res)=>{
    req.body.image = req.file.path;
    let data = await admin.create(req.body);
    data&&res.redirect("addadmin")   
}
module.exports.viewadmin = async(req,res)=>{
    let data = await admin.find({})
    data&&res.render("viewadmin",{data})
}
module.exports.edit=async(req,res)=>{
    let data = await admin.findById(req.query.id)
    data&&res.render("edit",{data})
}
module.exports.update= async (req,res)=>{
    let img = "";
    let singledata = await admin.findById(req.body.id)
    req.file ? img = req.file.path : img = singledata.image
    req.file && fs.unlinkSync(singledata.image)
    req.body.image = img
    let data = await admin.findByIdAndUpdate(req.body.id,req.body);
    data && res.redirect("viewadmin");
}
module.exports.delete=async(req,res)=>{
    let singledata = await admin.findById(req.query.id);
    singledata && fs.unlinkSync(singledata.image);
    let data = await admin.findByIdAndDelete(req.query.id);
    data && res.redirect("viewadmin");
}
module.exports.widget=async(req,res)=>{
    res.render("widget")
}
module.exports.chart=async(req,res)=>{
    res.render("chart")
}
module.exports.logout=async(req,res)=>{
    req.session.destroy();
    res.redirect("/");
}