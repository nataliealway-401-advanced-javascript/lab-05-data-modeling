'use strict';


require('dotenv').config();
//REQUIRE -------------------------
const mongoose = require('mongoose');
const Categories = require('./models/categories-model');
const Products = require('./models/products-model');

let categories = new Categories;
let products = new Products;

//CONNECTION ----------------------
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// TESTING -------------------------

let testCategories = {
  name: 'someCategory',
  count: 30,
};

let testProducts = {
  name: 'someProduct',
  quantity: 20,
};

categories
  .create(testCategories)
  .then(res => console.log(res))
  .catch(err => console.log(err));

products
  .create(testProducts)
  .then(res => console.log(res))
  .catch(err => console.log(err));

