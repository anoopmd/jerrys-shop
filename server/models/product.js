"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  sku: String,
  type: String,
  title: String,
  description: String,
  asin: String,
  shipping: Object,
  pricing: Object,
  details: Object
});

module.exports = mongoose.model('Product', productSchema);