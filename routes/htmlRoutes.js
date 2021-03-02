//include path package for correct file path
const path = require('path');
// const db = require('../db/db.json');

////////////get user to pages//////////////////////////
module.exports = (app) => {

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// app.get('/api/notes', (req, res) => {
//     res.json(db);
// })

//POST saves note & add to db.json file & display on /notes. Need unique ID.
// app.post('/api/notes', (req, res) => {

// })

//DELETE removes note from db.json file
//app.delete('api/notes', (req, res) => {

// });

};
