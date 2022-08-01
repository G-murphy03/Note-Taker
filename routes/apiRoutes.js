// Importing dependencies
const path = require('path');
const fs = require('fs')
const uid = require('uniqid');

module.exports = (app) => {
  // GET /api/notes should get the db.json file 
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uid(),
    };
    // pushing created note to be written in the db.json file
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
  });
};

