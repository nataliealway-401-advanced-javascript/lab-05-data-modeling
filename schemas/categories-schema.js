'use strict';

const mongoose = require('mongoose');

const categories = new mongoose.Schema({
  name: { type: String, required: true },
  amount: {type: Number, required: true},
});

// Runs any time we run the .findOne() method
categories.post('findOne', function () {
  console.log('Record was found, returning data');
});

// Runs any time we create a new record instance
categories.post('find', function () {
  console.log('Record not found');
});

// Runs after we save (we can also run pre('save') as well ...)
categories.post('save', function () {
  console.log('Record has been saved to database');
});

module.exports = mongoose.model('categories', categories);