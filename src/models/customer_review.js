var mongoose = require('mongoose');

var customerReviewSchema = mongoose.Schema({
  company: {type: String, unique: true},
  reply_count : {type : Number},
  retweet_count : {type : Number},
  favorite_count : {type : Number},
  follower_count : {type : Number},
});

module.exports = mongoose.model('CustomerReview', customerReviewSchema);