/*jshint node:true*/
var express   = require('express'),
    data     = require('../data/dummy_review_companies.json'),
    router    = express.Router();

router.get('/', function(req, res) {
    console.log(data);

    var result = data.filter(data => data.company !== "tokopedia");
    console.log("jancukk");
    console.log(result);
});

router.get('/:company_name/others', function(req, res) {
    var data_filtered = data.filter(data => data.company !== req.params.company_name);
    var sum_data_all = data_filtered.length;
    var data_good_filtered = data_filtered.filter(data => data.sensitive === "1");
    var sum_data_good = data_good_filtered.length;

    var output = sum_data_good/sum_data_all * 100;
    res.json({"result": output});
});


router.get('/:company_name/self', function(req, res) {
    var data_filtered = data.filter(data => data.company === req.params.company_name);
    var sum_data_all = data_filtered.length;
    var data_good_filtered = data_filtered.filter(data => data.sensitive === "1");
    var sum_data_good = data_good_filtered.length;

    var output = sum_data_good/sum_data_all * 100;
    res.json({"result": output});
});

module.exports = router;
