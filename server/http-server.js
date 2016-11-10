"use strict";

var express = require('express'),
    config = require('config'),
    winston = require('winston'),
    bodyParser = require('body-parser'),
    logHelper = require('./helpers/log-helper');


var HttpServer = function () {};

/* Creating the express application */
HttpServer.prototype.init = function init(){
    this.app = new express();

    this.app.use(logHelper.log);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
};

/* Listen for Http Requests */
HttpServer.prototype.start = function start(){
    this.app.listen(config.node.port, function(){
        winston.info('Listening for Http Requests on Port : ' + config.node.port);
    });
};

module.exports = HttpServer;