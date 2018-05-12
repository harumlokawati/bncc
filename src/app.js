var express = require('express'),
cors = require('cors'),
db = require('mongoose'),
app = express(),
path = require('path'),
bodyParser = require('body-parser');

// db.connect('http://localhost:27017/bncc', function() {
// 	console.log('connected');
// });

app.use(cors());

// app.use(bodyparser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('views', __dirname + '/views');
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'..','public')));

app.get('/', function(req, res) {
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

// var T = new Twit({
// 	consumer_key:         'hSAHglnYD3IRqFLf2qAQvtBgT',
// 	consumer_secret:      'n4xErXSHAQUybp5SqRSNwtNSADWcdCVfdYIktkg3DWafSUM1Fr',
// 	access_token:         '212796362-KNX9xWRcYwWnAib7rFSfviM4nY5Z9kqzrElVQS9n',
// 	access_token_secret:  '07TdK7TPcrUMlLdG2eSgH3bZYBmDASZlaQDcWxMXMVMU6',
// 	timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
// });

// var stream = T.stream('statuses/filter', {track: 'tokopedia'});

// stream.on('tweet', function(tweet) {
// console.log(tweet);
// });
app.listen(3000, function() {
console.log('App Started');
});