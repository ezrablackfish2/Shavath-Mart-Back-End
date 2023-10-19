const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    price: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
