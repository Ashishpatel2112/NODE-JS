const express= require('express');
const port =2000;
const app=express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
let users=[
    {
        id : 1,
        name : "ashish",
        subject : "react",
        city : "rajkot",
    },
    {
        id : 2,
        name : "raj",
        subject : "javascript",
        city : "Ahemdabad",
    },
    {
        id : 3,
        name : "vivek",
        subject : "nodejs",
        city : "rajkot",
    },
    {
        id : 4,
        name : "shyam",
        subject : "bootstrap",
        city : "rajkot",
    }  
]
app.get("/",(req,res)=>{
    res.render('home');
})

app.get("/form",(req,res)=>{
    res.render('Form',{users});
});

app.post("/add",(req,res)=>{
    console.log(req.body);
    res.redirect("/form");
})

app.listen(port,(err)=>{
    err?console.log(err):console.log(`server started at http://localhost:${port}`);
});