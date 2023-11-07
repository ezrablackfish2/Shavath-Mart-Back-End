// const Review = require("../models/Review");
//
// async function getReviewById(req, res) {
//  const result = await Review.find();
//
//  res.send(result);
//  res.end();
//}
//
//async function submitReview(req, res) {
//  const { productId, message } = req.body;
//
//  const result = await Review.create({
//    productId: productId,
//    message: message,
//  });
//
//  res.send(result);
//  res.end();
//}
//
//module.exports = {
//  getReviewById,
//  submitReview,
//};


const Review = require('../models/Review');

async function getReviewById(req, res) {
  const reviews = await Review.findAll();
  res.json(reviews);
}

async function submitReview(req, res) {
  const { productId, message } = req.body;

  const review = await Review.create({
    productId,
    message,
  });

  res.json(review);
}

module.exports = {
  getReviewById,
  submitReview,
};

