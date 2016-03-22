var mongoose = require('mongoose'),
    quoteModel = require('../models/Quote'),
    voteModel = require('../models/Vote'),
    userStoryModel = require('../models/UserStory')
    featureModel = require('../models/Feature'),
    releaseModel = require('../models/Release'),
    voteModel = require('../models/Vote'),
    testModel = require('../models/Test'),
    projectModel = require('../models/Project'),
    testStepModel = require('../models/TestStep'),
    userModel = require('../models/User');
    
module.exports = function(config) {
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('hackathon db opened');
    });
}