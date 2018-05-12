/*jshint node:true*/
var express   = require('express'),
    words     = require('../models/powerful_words'),
    router    = express.Router();

router.get('/:company_name', function(req, res) {
    words.find({company: req.params.company_name}, (err, result) => {
        if (err) {
            console.log(err);
            res.json({"msg": "something error"});
        }

        res.json(result);
    });
});

router.post('/', function(req, res) {
    var company_name = req.body.company_name;
    var word = req.body.word;

    words.find({company: req.params.company_name}, (err, result) => {
        if (err) {
            console.log(err);
            res.json({"msg": "something error"});
        }


        if (result.length == 0) {
            var new_company_words = new words({
                company: company_name,
                powerfulWords: word
            });

            new_company_words.save((err) => {
                if (err)
                    res.json({"msg": "something error"});
                else {
                    res.json({"msg": "success"});
                }
            });
        }

        //kalo udh ada, di tambah arraynya
        //to-do

        
        res.json(result);
    });
});

module.exports = router;
