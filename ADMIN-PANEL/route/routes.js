const express = require('express');
const route = express.Router();
const multer = require("../multer/multer")
const productmulter=require('../multer/product')
const ctl=require("../controller/indexctl")

route.get("/",ctl.dashboard)
route.get("/addadmin",ctl.addadmin)
route.post("/adduser",multer,ctl.adduser)
route.get("/viewadmin",ctl.viewadmin)
route.get("/deleteadmin",ctl.deleteadmin)
route.get("/updateadmin",ctl.updateadmin)
route.post("/updateuser",multer,ctl.updateuser)
route.get("/addcategory",ctl.addcategory)
route.get("/updatecate",ctl.updatecategory)
route.post("/addcat",ctl.addcat)
route.get("/deletecat",ctl.daletecat)
route.post("/updatecat",ctl.updatecat)
route.get("/viewcategory",ctl.viewcategory)
route.get("/addsubcategory",ctl.addsubcategory)
route.post("/addsubcat",ctl.addsubcat)
route.get("/deletesubcat",ctl.deletesubcat)
route.get("/updatesubcate",ctl.updatesubcate)
route.post("/updatesubcat",ctl.updatesubcat)
route.get("/viewsubcategory",ctl.viewsubcategory)
route.get("/addextracategory",ctl.addextracategory)
route.post("/addextracat",ctl.addextracat)
route.get("/viewextracategory",ctl.viewextracategory)
route.get("/updateextracate",ctl.updateextracate)
route.post("updateextracat",ctl.updateextracat)
route.get("/deleteextracat",ctl.deleteextracat)
route.get("/addproduct",ctl.addproduct)
route.post("/addproducts",productmulter,ctl.addproducts)
route.get("/viewproduct",ctl.viewproduct)
route.get("/deleteproduct",ctl.deleteproduct)
route.get("/updateproduct",ctl.updateproduct)
module.exports=route;