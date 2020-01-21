'use strict';

const mongoose = require('mongoose');

const categories = new mongoose.Schema({
  name: { type: String, required: true },
  count: {type: Number, required: true},
});

/**
 * @function
 * @returns console.log()
 */
// Runs any time we run the .findOne() method
categories.post('findOne', function () {
  console.log('Record was found, returning data');
});

/**
 * @function
 * @returns console.log()
 */
// Runs any time we create a new record instance
categories.post('find', function () {
  console.log('Record not found');
});

/**
 * @function
 * @returns console.log()
 */
// Runs after we save (we can also run pre('save') as well ...)
categories.post('save', function () {
  console.log('Record has been saved to database');
});

module.exports = mongoose.model('categories', categories);