"use strict";

var Product = require('../models/product');

// Gets a list of Products
exports.findAll = function(req, res) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(404).send('No products were found');
    }
    return res.json(products);
  });
};