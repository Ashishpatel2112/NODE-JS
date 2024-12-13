const express = require("express");
const route = express.Router();
const ctl = require("../controller/indexctl");
const multer=require("../multer/multer");
const passport=require("../middleware/passport")

route.get("/",ctl.login)
route.get("/register" ,ctl.register)
route.post("/useradd" ,ctl.useradd)
route.post("/added",passport.authenticate("local",{failureRedirect:"/"}),ctl.added)
route.get("/home",passport.checkAuthentication,ctl.homepage)
route.get("/addadmin",passport.checkAuthentication,ctl.addadmin)
route.post("/insert",multer,ctl.insert)
route.get("/editdata",passport.checkAuthentication,ctl.edit)
route.post("/update",multer,ctl.update)
route.get("/viewadmin",passport.checkAuthentication,ctl.viewadmin)
route.get("/deletedata",passport.checkAuthentication,3ctl.delete)
route.get("/widget",passport.checkAuthentication,ctl.widget)
route.get("/chart",passport.checkAuthentication,ctl.chart)
route.get("/logout",passport.checkAuthentication,ctl.logout)

module.exports=route;