'use strict';

const mongoose = require('mongoose');

const products = new mongoose.Schema({
  name: { type: String, required: true },
  amount: {type: Number, required: true},
});

/**
 * @function
 */
// Runs any time we run the .findOne() method
products.post('findOne', function () {
  console.log('Record was found, returning data');
});

/**
 * @function
 */
// Runs any time we create a new record instance
products.post('find', function () {
  console.log('Record not found');
});

/**
 * @function
 */
// Runs after we save (we can also run pre('save') as well ...)
products.post('save', function () {
  console.log('Record has been saved to database');
});

module.exports = mongoose.model('products', products);