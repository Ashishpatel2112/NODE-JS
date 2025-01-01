const express = require("express");
const port=2025;
const app = express()
const path= require('path')
const db = require("./config/db")

app.set("view engine",'ejs');
app.use(express.urlencoded({extended:true}))

app.use("/",require('./router/route'))

app.use("/public",express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.listen(port,(err)=>{
    err?console.log(err):console.log(`SERVER STARTED ON http://localhost:${port}`);
    
    
})