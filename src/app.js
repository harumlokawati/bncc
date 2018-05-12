

var express = require('express'),
	cors = require('cors'),
	db = require('mongoose'),
	app = express(),
	bodyParser = require('body-parser');

// db.connect('http://localhost:27017/bncc', function() {
// 	console.log('connected');
// });

app.use(cors());
// app.use(bodyparser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	console.log('crot');
	res.send('hello words');
});

app.listen(3000, function() {
	console.log('App Started');
});