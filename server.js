const express = require('express');
const app = express();
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


const PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

////////////get user to pages//////////////////////////

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get('/notes', function(req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"));
// });

// app.get('/api/notes', function(req, res) {
//     res.json(notes);
// })

/////////////////routes/////////////////////////


app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));