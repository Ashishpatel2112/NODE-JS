const express= require('express');
const port = 2000;

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('Home')
})

app.listen(port,(err) => {
    err?console.log(err):console.log(`WELCOME TO http://localhost:${port}`);
    
})