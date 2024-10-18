const express = require('express');
const port = 2000;
const app = express();
const db = require('./config/db');
const adminschma = require('./config/dbschema');
const path = require('path');
const { log } = require('console');
app.use("/public", express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('navbar');
});

app.get('/display', async (req, res) => {
        let data = await adminschma.find({});
        res.render('display', { data });
});

app.get('/editdata', async (req, res) => {
    try {
        let editeddata = await adminschma.findById(req.query.id);
        if (editeddata) {
            res.render("edit", { editeddata });
        } else {
            res.status(404).send("Data not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data for editing");
    }
});

app.post("/edit", async (req, res) => {
        let update = await adminschma.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            author: req.body.author,
            price: req.body.price,
        });
        update&&res.redirect("display")
});

app.post("/added", async (req, res) => {
        await adminschma.create(req.body);
        res.redirect('/display');
});

app.get("/delete", async (req, res) => {
   
        let deleteddata = await adminschma.findByIdAndDelete(req.query.id);
        deleteddata&&res.redirect('display')
});

app.listen(port, (err) => {
    err?console.log(err):console.log(`Listening on http://localhost:${port}`);
    ;
    
});


