const Review = require("../models/Review");

async function getReviewById(req, res) {
  const { productId } = req.query;
  const result = await Review.find({ productId: productId });

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
