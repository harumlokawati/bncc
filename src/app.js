var express = require('express'),
	cors = require('cors'),
	db = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	app = express(),
	Twit = require('twit');

var config = require("./config.json");

//route
var words_router = require("./controllers/pw_words_controllers");
var reaction_router = require("./controllers/reactionController");
var customer_router = require("./controllers/customer_review_controllers");


db.connect('mongodb://localhost/bncc', function() {
	console.log('connected');
});

app.use(cors());

// app.use(bodyparser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('views', __dirname + '/views');
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'..','public')));

app.get('/', function(req, res) {
	//res.send('Webservice');
	console.log('crot');
	//res.send('hello words');
	res.render('index');
});
// app.post('/login', function(req, res) {
// 	console.log("login");
// 	var data = {
// 		company_name: req.body.company_name
// 	};

// 	console.log(data.company_name);
// 	res.render('dashboard',data);
// });
app.get('/dashboard', function(req, res) {
	console.log('crot dashboard');
	var data = {
		company_name: ""
	};
	//res.send('hello words');
	res.render('dashboard',data);
});
app.post('/dashboard', function(req, res) {
	console.log('crot dashboard');
	var data = {
		company_name: req.body.company_name
	};
	//res.send('hello words');
	res.render('dashboard',data);
});
app.get('/product', function(req, res) {
	console.log('crot get product');
	var data = {
		company_name: ""
	};
	//res.send('hello words');
	res.render('product',data);
});
app.post('/product', function(req, res) {
	console.log('crot get product');
	//res.send('hello words');
	var data = {
		company_name: req.body.company_name
	};
	//res.send('hello words');
	res.render('product',data);
});
app.get('/broadcast', function(req, res) {
	console.log('crot get broadcast');
	var data = {
		company_name: ""
	};
	//res.send('hello words');
	res.render('broadcast',data);
});
app.post('/broadcast', function(req, res) {
	console.log('crot post broadcast');
	//res.send('hello words');
	var data = {
		company_name: req.body.company_name
	};
	//res.send('hello words');
	res.render('broadcast',data);
});
app.get('/employee', function(req, res) {
	console.log('crot get employee');
	var data = {
		company_name: ""
	};
	//res.send('hello words');
	res.render('employee',data);
});
app.post('/employee', function(req, res) {
	console.log('crot post employee');
	//res.send('hello words');
	var data = {
		company_name: req.body.company_name
	};
	//res.send('hello words');
	res.render('employee',data);
});
// var Twit = require('twit');

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