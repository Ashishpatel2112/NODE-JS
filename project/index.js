const express = require('express');
const port = 2000;

const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use("/public",express.static(path.join(__dirname,"public")))
 app.get ('/', (req, res) => {  
   res.render('main')    
 });
app.listen(port,(err)=>{
   err?console.log(err):console.log(`server started http://localhost:${port}`);
   
});