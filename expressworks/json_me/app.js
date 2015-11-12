var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		if (err) return res.sendStatus(500);

		try {
			books = JSON.parse(data);
		} catch (err) {
			res.sendStatus(500);
		}

		res.json(books);
	});
});

app.listen(process.argv[2]);
