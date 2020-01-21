'use strict';

let schema = require('../schemas/categories-schema');

/**
 * @class
 */
class Model {
  constructor() {
    this.schema = schema;
  }

  /**
 * @param {string} _id
 * @returns {object}
 */
  get(_id) {
    if (_id) {
      return this.schema.findOne({_id});
    } else {
      return this.schema.findOne({});
    }
  }
  /**
 * @param {object} record
 * @returns {function}
 */
  create(record) {
    if (typeof record === 'object') {
      let newRecord = new this.schema(record);
      return newRecord.save();
    } else {
      return Error('Uh oh! Invalid record');
    }
  }

  /**
 * @param {string} _id
 * @param {object} record
 * @returns {function}
 */
  update(_id, record) {
    if (_id && record) {
      return this.schema.findByIdAndUpdate(_id, record, {new: true});
    } else {
      return ('undefined');
    }
  }

  /**
 * @param {string} _id
 * @returns {function}
 */
  delete(_id) {
    if (_id) {
      return this.schema.findByIdAndDelete(_id);
    } else {
      return ('undefined ID');
    }
  }
}

module.exports = Model;

