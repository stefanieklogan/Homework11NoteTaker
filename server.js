const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const displayPage = (res, filename) => {
    fs.readFile(`${__dirname}/${filename}`, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end(
              '<html><head><title>Oops</title></head><body><h1>Oops, there was a server-related error</h1></html>'
            );
          }
        else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
        }
    }); 
};

const handleRequest = (request, response) => {
    const path = req.url;
    switch (path) {
        case '/':
            return displayPage(res, `index.html`);
        case '/notes':
            return displayPages(res, `notes.html`);
        default:
            return displayPages(res, `404.html`);
    }
};

// res.send("Welcome to the Star Wars Page!")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// app.get('/', function(req, res) {
//     return displayPage(res, `index.html`);
//   });

app.get('/notes', function(req, res) {
    return displayPage(res, `notes.html`);
  });

const server = http.createServer(handleRequest);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));