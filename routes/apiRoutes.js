const path = require('path');
const { v4: uuidv4 } = require('uuid');
let dbJSON = require('../db/db.json');
let fs = require('fs');

module.exports = (app) => {

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

app.post('/api/notes', (req, res) => { 
    const newNote = req.body;
    req.body.id = uuidv4();
    dbJSON.push(newNote);
    console.log(dbJSON);

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(dbJSON), function (err) {
        if (err) throw err;
        res.json("response")
    })
})

app.delete('/api/notes/:id', (req, res) => {
    let idFromBrowser = req.params.id;
    dbJSON = dbJSON.filter(note=>{
    
    return note.id != idFromBrowser;
    })

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(dbJSON), function (err) {
        if (err) throw err;
        res.json("response")
    })
})

};