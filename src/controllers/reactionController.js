/*jshint node:true*/
var express   = require('express'),
    data     = require('../data/dummy_review_companies.json'),
    reactionController = require('../routers/reactionRouter');
    router    = express.Router();

router.get('/', reactionController.index);
router.get('/:company_name/others', reactionController.others_reaction);
router.get('/:company_name/self', reactionController.internal_reaction);

module.exports = router;
