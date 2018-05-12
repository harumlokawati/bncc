/*jshint node:true*/
var express   = require('express'),
    words     = require('../models/powerful_words'),
    data     = require('../data/dummy_review_companies.json'),
    router    = express.Router();

router.get('/:company_name', function(req, res) {
    words.findOne({company: req.params.company_name}, (err, result) => {
        if (err) {
            console.log(err);
            res.json({"msg": "something error"});
        }

        res.json(result);
    });
});

router.post('/', function(req, res) {
    var company_name = req.body.company_name;
    var letter = req.body.word;

    words.findOne({company: company_name}, (err, result) => {
        if (err) {
            console.log(err);
            res.json({"msg": "something error"});
        }

        if (!result || result.length === 0) {
            var new_company_words = new words({
                company: company_name,
                powerfulWords: {word: letter}
            });

            new_company_words.save((err) => {
                if (err) 
                    res.json({"msg": "something error"});
                else {
                    res.json({"msg": "success"});
                }
            });
        }
        else {
            //kalo udh ada, di tambah arraynya
            var new_powerful_words_array = result.powerfulWords;
            new_powerful_words_array.push({word: letter});
            
            result.update({powerfulWords: new_powerful_words_array}, (err) => {
                if (err) 
                    res.json({"msg": "something error"});
                else {
                    res.json({"msg": "success"});
                } 
            });
        }
    });
});

router.get('/:company_name/words', function(req, res) {
    words.findOne({company: req.params.company_name}, (err, result) => {
        if (err) {
            console.log(err);
            res.json({"msg": "something error"});
        }

        var words_not_visited = data.filter(data => data.is_visited === "0");
        var words = result.powerfulWords;

        var calculate = function(words, words_not_visited) {
            console.log("wtf");
          return new Promise((resolve,reject) => {
             words_not_visited.forEach(function(part, idx, words_not_visited) {
                words.forEach(function(part2, index, words) {
                    if (words_not_visited[idx].text.split(' ').indexOf(words[index].word) > -1) 
                        words[index].counter += 1;
                });
             });

             resolve(words);
          });
        };

        calculate(words, words_not_visited).then(result => {
            console.log(result);

            //after all, save
            res.json({"msg": "wk"});
        });
    });
});

module.exports = router;
