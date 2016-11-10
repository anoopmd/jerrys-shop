"use strict";

var HttpServer = require('./http-server');
var HttpRouter = require('./http-router');

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
