"use strict";

var HttpServer = require('./http-server');
var HttpRouter = require('./http-router');
var winston = require('winston');

var MongooseConnectionHelper = require('./helpers/mongoose-connection-helper.js');

/* Connect to the database */
var mongooseConnectionHelper = new MongooseConnectionHelper();

mongooseConnectionHelper.connect(function(){

  winston.info('Connected to Mongo DB Server');

  // Init the server
  var httpServer = new HttpServer();
  httpServer.init();

  // Init the Http Routes
  var httpRouter = new HttpRouter({
      app : httpServer.app
  });
  httpRouter.route();

  // Start the server and listen for requests
  httpServer.start();
});