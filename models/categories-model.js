
'use strict';

const schema = require('../schemas/categories-schema.js');
const mongoModel = require('./mongo-model.js');

/**
 * @class
 */
class Categories extends mongoModel {
  constructor() {
    super();
    this.schema = schema;
  } 
}

module.exports = Categories;