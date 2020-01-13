'use strict';

let schema = require('../schemas/categories-schema');

class Model {
  constructor() {
    this.schema = schema;
  }

  // Read / search
  get(_id) {
    if (_id) {
      return this.schema.findOne({_id});
    } else {
      return this.schema.findOne({});
    }
  }

  create(record) {
    if (typeof record === 'object') {
      let newRecord = new this.schema(record);
      return newRecord.save();
    } else {
      return Error('Uh oh! Invalid record');
    }
  }

  update(_id, record) {
    if (_id && record) {
      return this.schema.findByIdAndUpdate(_id, record, {new: true});
    } else {
      return ('undefined');
    }
  }

  delete(_id) {
    if (_id) {
      return this.schema.findByIdAndDelete(_id);
    } else {
      return ('undefined ID');
    }
  }
}

module.exports = Model;

