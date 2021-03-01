//include path package for correct file path
const path = require('path');

////////////get user to pages//////////////////////////
module.exports = (app) => {

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
})
};
