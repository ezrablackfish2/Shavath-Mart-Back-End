const Review = require("../models/Review");

async function getReviewById(req, res) {
  const result = await Review.find();

  res.send(result);
  res.end();
}

async function submitReview(req, res) {
  const { productId, message } = req.body;

  const result = await Review.create({
    productId: productId,
    message: message,
  });

  res.send(result);
  res.end();
}

module.exports = {
  getReviewById,
  submitReview,
};
