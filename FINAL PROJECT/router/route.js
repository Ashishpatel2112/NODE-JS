const express=require('express')
const route=express.Router();
const ctl=require("../controller/indexctl")
const multer = require("../multer/multer")

route.get("/",ctl.home)
route.get("/about",ctl.about)
route.get("/trip",ctl.trip)
route.get("/blog",ctl.blog)
route.get("/contact",ctl.contact)
route.get("/addblog",ctl.addblog)
route.post("/added",multer,ctl.added)
route.get("/deletedata",ctl.deletedata)

module.exports=route