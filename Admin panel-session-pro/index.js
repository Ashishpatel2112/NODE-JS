const express = require('express')
const app = express()
const port = 3000
const db = require("./config/db")
const path=require("path");
const passport = require("passport")
const session = require("express-session")

app.set('view engine',"ejs");
app.use(express.urlencoded({extended:true}))
app.use(session({
name:"local",
secret:"localst",
resave: true,
saveUninitialized: false,
cookie: {maxAge:100*100*60 , httpOnly:true }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use("/",require("./routes/route"))
app.use("/public",express.static(path.join(__dirname,"public")));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));


app.listen(port,(err)=>{
    err?console.log(err):console.log(`Listening on port := http://localhost:${port}`);
})