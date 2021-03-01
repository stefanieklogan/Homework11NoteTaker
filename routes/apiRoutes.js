//include path package for correct file path
const express = require('express');
const app = express;

const path = require('path');
const handleNote = require('../assets/js/index');

////////////get user to pages//////////////////////////
module.exports = (app) => {

app.get('/api/notes', (req, res) => res.json(handleNote));

};