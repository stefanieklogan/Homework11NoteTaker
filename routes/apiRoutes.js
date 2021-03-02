const path = require('path');

////////////get user to api/notes pg
module.exports = (app) => {

app.get('/api/notes', (req, res) => res.json());

};