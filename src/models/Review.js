// const mongoose = require("mongoose");
//
//const ReviewSchema = new mongoose.Schema({
//  productId: {
//    type: String,
//    required: true,
//  },
//  message: {
//    type: String,
//    required: true,
//  },
//});
//
//const Review = mongoose.model("Review", ReviewSchema);
//module.exports = Review;

// review.js


const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Review = db.define('Review', {
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Review;

