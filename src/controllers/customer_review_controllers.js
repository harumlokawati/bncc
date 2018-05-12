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

router.post(':/companyName', function(req, res) {
    var company_name = req.params.company_name;
    var replyCount = req.body.reply_count;
    var retweetCount = req.body.retweet_count;
    var favoriteCount = req.body.favorite_count;
    var followerCount = req.body.follower_count;


    var customerReview = new customer({
                company: company_name,
                reply_count: replyCount,
                retweet_count: retweetCount,
                favorite_count: favoriteCount,
                follower_count: followerCount
            });

            customerReview.save((err) => {
                if (err) 
                    res.json({"msg": "something error"});
                else {
                    res.json({"msg": "success"});
                }
            });

});



module.exports = router;
