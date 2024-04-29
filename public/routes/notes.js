const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('./fsUtils');

diagnostics.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => 
    res.json((JSON.parse((data))))
    );
    
});

diagnostics.post('/', (req, res) => {

    const{ title, text} = req.body
    console.log(req.body);
    const payload = {
      title: title,
      text: text,
      id:uuidv4(),
    }
    readAndAppend(payload,'./db/db.json');
    res.json('./db/db.json');
});  
    
  
module.exports = diagnostics;
  