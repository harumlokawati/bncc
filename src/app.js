var express = require('express'),
	cors = require('cors'),
	db = require('mongoose'),
	bodyParser = require('body-parser'),
	app = express(),
	Twit = require('twit');

var config = require("./config.json");

//route
var words_router = require("./controllers/pw_words_controllers");
var reaction_router = require("./controllers/reaction_controllers");
var customer_router = require("./controllers/customer_review_controllers");


db.connect('mongodb://localhost/bncc', function() {
	console.log('connected');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.send('Webservice');
});

app.use('/company/words', words_router);
app.use('/reaction', reaction_router);
app.use('/customer/', customer_router);


// var T = new Twit({
// 	consumer_key:         config.consumer_key,
// 	consumer_secret:      config.consumer_secret,
// 	access_token:         config.access_token,
// 	access_token_secret:  config.access_token_secret,
// 	timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
// });

// var stream = T.stream('statuses/filter', {track: 'tokopedia'});

// stream.on('tweet', function(tweet) {
// 	console.log(tweet);
// });

app.listen(3000, function() {
	console.log('App Started');
});