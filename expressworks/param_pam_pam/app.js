var express = require('express');
var app = express();

app.param('id', function(req, res, next, id) {
	req.id = id;
	next();
});

app.put('/message/:id', function(req, res, next) {
	var response = require('crypto')
			.createHash('sha1')
			.update(new Date().toDateString() + req.id)
			.digest('hex');

	res.end(response);
	next();
});

app.listen(process.argv[2]);
