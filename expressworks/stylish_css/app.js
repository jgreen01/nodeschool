var path = require('path');
var express = require('express');
var app = express();

var files = process.argv[3] || path.join(__dirname, 'public');

app.use(require('stylus').middleware(files));
app.use(express.static(files));

app.listen(process.argv[2]);
