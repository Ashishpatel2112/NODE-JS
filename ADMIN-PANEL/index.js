const express = require('express');
const port = 3800;
const app = express();
const path =require("path");
const db = require("./config/db");

app.set("view engine",'ejs');
app.use(express.urlencoded({extended:true}))
app.use("/",require("./route/routes"))
app.use("/public",express.static(path.join(__dirname,"public")));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use("/product",express.static(path.join(__dirname,"product")));

app.listen(port,(err)=>{
    err?console.log(err):console.log(`listening on port :- http://localhost:${port} `);
})
