var mongoose = require('mongoose');

var powerfulWordsSchema = mongoose.Schema({
	company: {type: String, unique: true},
  powerfulWords: [String]
});

module.exports = mongoose.model('PowerfulWords', powerfulWordsSchema);