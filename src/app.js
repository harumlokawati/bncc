

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
var Twit = require('twit');

var T = new Twit({
consumer_key:         'hSAHglnYD3IRqFLf2qAQvtBgT',
consumer_secret:      'n4xErXSHAQUybp5SqRSNwtNSADWcdCVfdYIktkg3DWafSUM1Fr',
access_token:         '212796362-KNX9xWRcYwWnAib7rFSfviM4nY5Z9kqzrElVQS9n',
access_token_secret:  '07TdK7TPcrUMlLdG2eSgH3bZYBmDASZlaQDcWxMXMVMU6',
timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var stream = T.stream('statuses/filter', {track: 'tokopedia'});

stream.on('tweet', function(tweet) {
console.log(tweet);
});
app.listen(3000, function() {
console.log('App Started');
});