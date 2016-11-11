"use strict";

var api = {};

api.product = require('./api/product');

var HttpRouter = function(options){
  this.options = options;
};

/* Define the routes */
HttpRouter.prototype.route = function route(){
  var app = this.options.app;

  app.get('/', function(req, res){
    res.send('Hello World');
  });

  app.get('/products', api.product.findAll);

  app.use(function(req, res, next){
    res.status(404).send('The resource you were looking was not found');
  });
};

module.exports = HttpRouter;