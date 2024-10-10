const express= require('express');
const port = 3000;
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let students=[
    {
        id: 1,
        name: "John Doe",
        age: 20,
        address:"xyz"
    },
]

app.get("/",(req, res) => {
    res.render('home',{students})
});

app.post("/add",(req, res) => {
    req.body.id=students.length+1;
    students.push(req.body);
    res.redirect('/');
});

app.get("/delete",(req, res) => {
  let student=students.filter((item)=> item.id!=req.query.id);
  students=student;
  res.redirect('/');
});

app.get("/edit",(req, res) => {
  let stud=students.find((item)=> item.id==req.query.id);
  res.render('edit',{stud})
});

app.post("/update",(req,res)=>{
    students.map((e,i)=>{
        e.id==req.body.id?students[i]=req.body:e;
    })
    res.redirect('/');
});
app.listen(port,(err)=>{
    err?console.log(err):console.log(`Server Started http://localhost:${port}`); 
});