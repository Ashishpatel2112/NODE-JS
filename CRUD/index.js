const express = require('express')
const port = 2112;
const app = express();
const db= require('./config/db');
const adminSchema=require ('./config/dbschema');
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

app.get("/", async (req, res) => {
    let data = await adminSchema.find({});
    res.render("main",{data})
});

app.post("/insert", async (req, res) => {
    let data = await adminSchema.create(req.body);
    data&&res.redirect("/")
});

app.get("/deletedata", async (req, res) => {
    let deleterecord = await adminSchema.findByIdAndDelete(req.query.id);
    deleterecord&&res.redirect("/")
});

app.get ("/editdata", async (req, res) => {
   let data = await adminSchema.find({});
   let editeddata = data.find((item)=>item.id == req.query.id);
   editeddata&&res.render("edit",{editeddata})
})

app.post ("/edit", async (req, res) => {
    let update = await adminSchema.findByIdAndUpdate(req.body.id,{
        name : req.body.name,
        age : req.body.age,
        email : req.body.email,
    });
   
    update&&res.redirect("/")
   
 
})
app.listen(port,(err)=>{
    err?console.log(err):console.log(`listening on http://localhost:${port}`);
});