//This file is to use mongoose to create a schema the files in the models folder

//This variable is to require config file
const dbConfig = require('../config/db.config');

//This variable is to require mongoose
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = dbConfig.uri;
db.games = require('./games.js')(mongoose);
db.movies = require('./movies.js')(mongoose);
db.users = require('./users.js')(mongoose);
db.shows = require('./shows.js')(mongoose);
db.reviews = require('./reviews.js')(mongoose);
module.exports = db;