const express=require("express");
const port=2112;
const app =express();
const path=require("path")
const db=require("./config/db");
const cookie = require("cookie-parser");

app.set("view engine","ejs");
app.use(cookie())
app.use(express.urlencoded({extended:true}))
app.use("/",require("./routes/route"))
app.use("/public",express.static(path.join(__dirname,"public")))

app.listen(port,(err)=>{
    err?console.log(err):console.log(`listening on port:=http://localhost:${port}`);
})