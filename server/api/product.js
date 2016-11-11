"use strict";

var Product = require('../models/product'),
    winston = require('winston');

// Gets a list of Products
exports.findAll = function(req, res) {

  var type = req.query.type;

  if(['Film', 'Audio Album'].indexOf(type) > -1){

    winston.info('Fetching all products by type : ' + type);

    Product.find({type : type}, function(err, products) {
      if (err) {
        return res.status(404).send('No products were found');
      }
      return res.json(products);
    });
  } else {

    winston.info('Fetching all products');

    Product.find({}, function(err, products) {
      if (err) {
        return res.status(404).send('No products were found');
      }
      return res.json(products);
    });
  }
};