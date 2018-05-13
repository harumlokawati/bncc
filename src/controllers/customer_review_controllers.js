/*jshint node:true*/
var express   = require('express'),
    //customer     = require('../models/customer_review'),
    data     = require('../data/dummy_review_customer.json'),
    router    = express.Router();
    customerController = require('../routers/customer')


// You can find your project ID in your Dialogflow agent settings
const projectId = 'budirecehbot'; //https://dialogflow.com/docs/agents#settings
const sessionId = 'quickstart-session-id';
//const query = 'hello';
const languageCode = 'en-US';

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();

// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);



//get trend in until week
router.get('/:companyName/weeks', customerController.findAllInWeeks)

//get most reply in until week
router.get('/:companyName/reply', customerController.findAllReplyInWeeks)

//get most retweet in until week
router.get('/:companyName/retweet', customerController.findAllRetweetInWeeks)

//get most favorite until week
router.get('/:companyName/favorite', customerController.findAllFavoriteInWeeks)

//get most follower
router.get('/:companyName/follower', customerController.findAllFollowerInWeeks)
    


router.post('/:companyName', customerController.postData)

module.exports = router;
