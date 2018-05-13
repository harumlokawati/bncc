var mongoose = require('mongoose');

var powerfulWordsSchema = mongoose.Schema({
	company: {type: String, unique: true},
  powerfulWords: [{
  	word: String, 
  	counter: {type: Number, default: 0}
  }]
});

module.exports = mongoose.model('PowerfulWords', powerfulWordsSchema);