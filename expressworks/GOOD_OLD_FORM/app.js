var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');

app.use(bodyparser.urlencoded({extended: false}));
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.post('/form', function(req, res) {
	console.log(req.body.str.split('').reverse().join(''));
});

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(process.argv[2]);
