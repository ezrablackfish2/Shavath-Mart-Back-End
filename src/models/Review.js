const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
