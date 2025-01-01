
const schema=require("../model/schema")
const path=require("path")
const fs = require("fs");


module.exports.home=(req,res)=>{
    res.render("home")
}
module.exports.about=(req,res)=>{
    res.render("about")
}
module.exports.trip=(req,res)=>{
    res.render("trip")
}
module.exports.blog=async(req,res)=>{
    let data = await schema.find({})
    data&&res.render("blog",{data})
}
module.exports.contact=(req,res)=>{
    res.render("contact")
}
module.exports.addblog=(req,res)=>{
    res.render("addblog")
}
module.exports.added=async(req,res)=>{
    req.body.image = req.file.path
    let data = await schema.create(req.body)
    data&&res.redirect("blog")
}
module.exports.deletedata=async(req,res)=>{
    let singledata = await schema.findById(req.query.id);
    singledata && fs.unlinkSync(singledata.image);
    let data = await schema.findByIdAndDelete(req.query.id);
    data && res.redirect("blog");
}