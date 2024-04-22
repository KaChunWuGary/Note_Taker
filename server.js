const express = require('express');
const path = require('path');
const api = require('./public/assets/js/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//get route for notes
app.get('/notes',(req,res) =>
    res.sendFile(path.join(__dirname,'./public/note.html'))
);

//get route for home page
app.get('*',(req,res) =>
    res.sendFile(path.join(__dirname,'./public/index.html'))
);


