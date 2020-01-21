'use strict';

require('@code-fellows/supergoose');

const Model = require('../models/mongo-model');
const model = new Model();


describe('CRUD functionality', () => {


  it('can create a record', async () => {
    let obj = { name: 'Shirts', count: 20};
    let createObj = await model.create(obj);
    Object.keys(obj).forEach(key => {
      expect(createObj[key]).toEqual(obj[key]);
    });
  });

  it('can get a record', async () => {
    let obj = { name: 'Pants', count: 32};
    let createObj = await model.create(obj);
    let fetchObj = await model.get(createObj._id);
    expect(fetchObj._id).toEqual(createObj._id);
  });

  it('can update a record', async () => {
    const obj = { name: 'purse', count: 10 };
    const update = { name: 'handbag' };
    const createObj = await model.create(obj);
    const updateObj = await model.update(createObj._id, update);
    Object.keys(update).forEach(key => {
      expect(updateObj[key]).not.toEqual(obj[key]);
    });
  });

  it('can delete a record', async () => {
    const obj = { name: 'DELETE', count: 1 };
    let createObj = await model.create(obj);
    await model.delete(createObj._id);
    let fetchObj = await model.get(createObj._id);
    expect(fetchObj).toBeNull();
  });
});




