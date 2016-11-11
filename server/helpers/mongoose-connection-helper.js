"use strict";

var mongoose = require('mongoose');
var config   = require('config');

var MongooseConnectionHelper = function(){
};

MongooseConnectionHelper.prototype.connect = function(next){
  mongoose.connect(config.mongo.connectionString);
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', next);
};

module.exports = MongooseConnectionHelper;