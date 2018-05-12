/*jshint node:true*/
var express   = require('express'),
    customer     = require('../models/customer_review'),
    router    = express.Router();



//get most reply
router.get('/:companyName/reply', function(req, res) {
    customer.find({company: req.params.companyName}).sort({reply_count : -1}).limit(1).exec((err, mostReply) => {
        if (err){
            console.log(err)
            res.json({"msg": "something error"});
        }
        res.json(mostReply)
    })
});

//get most retweet
router.get(':/companyName/retweet', function(req, res) {
    customer.find({company: req.params.companyName}).sort({retweet_count : -1}).limit(1).exec((err, mostRetweet) => {
        if (err){
            console.log(err)
            res.json({"msg": "something error"});
        }
        res.json(mostRetweet)
    })
});

//get most favorite
router.get(':/companyName/favorite', function(req, res) {
    customer.find({company: req.params.companyName}).sort({favorite_count : -1}).limit(1).exec((err, mostFavorite) => {
        if (err){
            console.log(err)
            res.json({"msg": "something error"});
        }
        res.json(mostFavorite)
    })
});

//get most follower
router.get(':/companyName/follower', function(req, res) {
    customer.find({company: req.params.companyName}).sort({follower_count : -1}).limit(1).exec((err, mostFollower) => {
        if (err){
            console.log(err)
            res.json({"msg": "something error"});
        }
        res.json(mostFollower)
    })
});

/*
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

*/

module.exports = router;
