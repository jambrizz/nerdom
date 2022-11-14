//This file is to use mongoose to create a schema the files in the models folder

//This variable is to require config file
const dbConfig = require('../config/db.config');

//This variable is to require mongoose
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = dbConfig.uri;

module.exports = db;