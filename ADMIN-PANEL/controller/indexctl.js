const Admin = require('../model/adminschema')
const category=require('../model/catscheema')
const subcategory=require("../model/subcatscheema")
const extracategory=require('../model/extracatschema')
const product=require('../model/products')
const fs = require("fs");
const path = require('path')

module.exports.dashboard=(req,res)=>{
    res.render("dashboard")
}
module.exports.addadmin=(req,res)=>{
    res.render("addadmin")
}
module.exports.updateadmin= async (req,res)=>{
    let data = await Admin.findById(req.query.id)
    data&&res.render("updateadmin",{data})
}
module.exports.adduser= async (req,res)=>{
    req.body.image = req.file.path;
    let data = await Admin.create(req.body);
    data && res.redirect("addadmin")
}
module.exports.viewadmin= async (req,res)=>{
    let data = await Admin.find({})
    data && res.render("viewadmin",{data})
}
module.exports.updateuser=async(req,res)=>{
    let img = "";
    let singledata = await Admin.findById(req.query.id);
    req.file ? img = req.file.path : img = singledata.image
    req.file && fs.unlinkSync(singledata.image)
    req.body.image = img
    let data = await Admin.findByIdAndUpdate(req.body.id,req.body);
    data && res.redirect("viewadmin");
}
module.exports.deleteadmin= async (req,res)=>{
    let singledata = await Admin.findById(req.query.id);
    singledata && fs.unlinkSync(singledata.image);
    let data = await Admin.findByIdAndDelete(req.query.id);
    data && res.redirect("viewadmin");
}

// category

module.exports.addcategory=(req,res)=>{
    res.render("addcategory")
}
module.exports.addcat= async (req,res)=>{
    let data = await category.create(req.body)
    data && res.redirect("addcategory")
}
module.exports.viewcategory=async(req,res)=>{
    let data = await category.find({})
    data &&res.render("viewcategory",{data})
}
module.exports.daletecat=async(req,res)=>{
    let data = await category.findByIdAndDelete(req.query.id);
    data && res.redirect("viewcategory");   
}
module.exports.updatecategory=async(req,res)=>{
    let data = await category.findById(req.query.id)
    data&&res.render("updatecategory",{data})
}
module.exports.updatecat= async (req,res)=>{
    let data = await category.findByIdAndUpdate(req.body.id,req.body)
    data&&res.redirect("viewcategory")
}

// sub category

module.exports.addsubcategory=async(req,res)=>{
    let data = await category.find({})
    data && res.render("addsubcategory",{data})
}
module.exports.addsubcat= async(req,res)=>{
    let data = await subcategory.create(req.body)
    data && res.redirect("addsubcategory")
}
module.exports.viewsubcategory= async (req,res)=>{
    let data = await subcategory.find({}).populate({
        path:"categoryid"
    })
    data &&res.render("viewsubcategory",{data})
}
module.exports.deletesubcat=async(req,res)=>{
    let data = await subcategory.findByIdAndDelete(req.query.id);
    data && res.redirect("viewsubcategory");   
}
module.exports.updatesubcate=async(req,res)=>{
    let data = await subcategory.findById(req.query.id)
    data&&res.render("updatesubcategory",{data})
}
module.exports.updatesubcat=async(req,res)=>{
    let data = await subcategory.findByIdAndUpdate(req.body.id,req.body)
    data&&res.redirect("viewsubcategory")
}

// extra category

module.exports.addextracategory=async(req,res)=>{
    let data = await subcategory.find({})
   data && res.render("addextracategory",{data})
}
module.exports.addextracat=async(req,res)=>{
    let data = await extracategory.create(req.body)
    data && res.redirect("addextracategory")
    // console.log(data);
}
module.exports.viewextracategory=async(req,res)=>{
    let data = await extracategory.find({}).populate({
        path:"subcatid",
        populate:{
            path:"categoryid"
        }
    })
    data && res.render("viewextracategory",{data})
}
module.exports.updateextracate=async(req,res)=>{
    let data = await extracategory.findById(req.query.id)
    data&&res.render("updateextracategory",{data})
}
module.exports.updateextracat=async(req,res)=>{
    let data = await extracategory.findByIdAndUpdate(req.body.id,req.body)
    data&&res.redirect("viewextracategory")
}
module.exports.deleteextracat=async(req,res)=>{
    let data = await extracategory.findByIdAndDelete(req.query.id);
    data && res.redirect("viewextracategory");
}

// product

module.exports.addproduct=async(req,res)=>{
    let data = await extracategory.find({}) 
    data && res.render("addproduct",{data})
}
module.exports.addproducts=async(req,res)=>{
    req.body.productimage = req.file.path
    let data = await product.create(req.body);
    data && res.redirect("addproduct")
}
module.exports.viewproduct=async(req,res)=>{
    let data = await product.find({}).populate({
        path:"extracatid",
        populate:{
            path:"subcatid",
            populate:{
                path:"categoryid"
            }
        }
    })
    data && res.render("viewproduct",{data})
}
module.exports.deleteproduct=async(req,res)=>{
    let data = await product.findByIdAndDelete(req.query.id)
    data && res.redirect("viewproduct")
}
module.exports.updateproduct=async(req,res)=>{
    let img = "";
    let singledata = await product.findById(req.query.id)
    req.file ? img = req.file.path : img = singledata.image
    req.file && fs.unlinkSync(singledata.image)
    req.body.image = img
    let data = await product.findById(req.query.id)
    data && res.render("updateproduct",{data})
}