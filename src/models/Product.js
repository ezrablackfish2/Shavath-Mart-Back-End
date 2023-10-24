const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  price: {
    type: String,
  },
  color: {
    type: String,
  },
  description: {
    type: String,
  },
  isAvailable: {
    type: Boolean,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
