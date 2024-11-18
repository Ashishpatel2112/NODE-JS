const express=require("express");
const route=express.Router();
const ctl = require("../controller/indexctl");

route.get("/",ctl.login);
route.post("/logindata",ctl.logindata)
route.get("/register",ctl.register);
route.post("/loginuser",ctl.loginuser)
route.get("/home",ctl.home);
route.get("/card",ctl.card)
route.get("/addtask",ctl.addtask)
route.get("/edittask",ctl.edittask)
route.post("/update",ctl.update)
route.get("/viewtask",ctl.viewtask)
route.post("/added",ctl.added)
route.get("/deletetask",ctl.deletetask)
route.get("/logout",ctl.logout)

module.exports=route;