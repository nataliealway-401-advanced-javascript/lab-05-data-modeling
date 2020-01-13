
'use strict';

const schema = require('../schemas/products-schema');
const mongoModel = require('./mongo-model.js');

/**
 * @class
 */
class Products extends mongoModel {
  constructor() {
    super();
    this.schema = schema;
  } 
}

module.exports = Products;