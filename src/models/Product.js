//const mongoose = require("mongoose");
//
//const ProductSchema = new mongoose.Schema({
//  name: {
//    type: String,
//    required: true,
//  },
//  img: {
//    data: Buffer,
//    contentType: String,
//  },
//  price: {
//    type: String,
//  },
//  color: {
//    type: String,
//  },
//  category: {
//    type: String,
//  },
//  description: {
//    type: String,
//  },
//  isAvailable: {
//    type: Boolean,
//  },
//});
//
//const Product = mongoose.model("Product", ProductSchema);
//module.exports = Product;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.BLOB,
  },
  price: DataTypes.STRING,
  color: DataTypes.STRING,
  category: DataTypes.STRING,
  description: DataTypes.STRING,
  isAvailable: DataTypes.BOOLEAN,
});

sequelize.sync()
  .then(() => {
    console.log('Tables created or updated.');
  })
  .catch(err => {
    console.error('Error syncing Tables:', err);
  });

module.exports = Product;

