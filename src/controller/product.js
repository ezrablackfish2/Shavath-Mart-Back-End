//const fs = require("fs");
//const path = require("path");
//
//const Product = require("../models/Product");
//
//async function getAllProducts(req, res) {
//  const result = await Product.find({});
//
//  res.send(result);
//  res.end();
//}
//
//async function uploadProduct(req, res) {
//  const { name, price, color, category, description, isAvailable } = req.body;
//  const obj = {
//    name: name,
//    img: {
//      data: fs.readFileSync(
//        path.join(__dirname + "../../../uploads/" + req.file.filename)
//      ),
//      contentType: "image/png",
//    },
//    price: price,
//    color: color,
//    category: category,
//    description: description,
//    isAvailable: isAvailable,
//  };
//
//  const result = await Product.create(obj);
//  console.log(result);
//
//  res.send(result);
// res.end();
//}
//
//async function updateProduct(req, res) {
//  const { id, name, price, color, category, description, isAvailable } =
//    req.body;
//  const result = await Product.findOneAndUpdate(
//    { _id: id },
//    {
//      name: name,
//      price: price,
//      color: color,
// category: category,
//      description: description,
//      isAvailable: isAvailable,
//    }
//  );
//
//  console.log(req.body);
//
//  res.send(result);
//  res.end();
//}
//
//async function deleteProduct(req, res) {
//  const { id } = req.body;
//
//  const result = await Product.findOneAndDelete({ _id: id });
//
//  res.send(result);
//  res.end();
//}
//
//module.exports = {
//  getAllProducts,
//  uploadProduct,
//  updateProduct,
//  deleteProduct,
//};

const fs = require('fs');
const path = require('path');



const Product = require("../models/Product");

async function getAllProducts(req, res) {
  const products = await Product.findAll();
  res.json(products);
}

async function uploadProduct(req, res) {
  const { name, price, color, category, description, isAvailable } = req.body;
	let imageBuffer = {
	"type": "Buffer",
	"data": ""
	}
	if (req.file != undefined) {
  imageBuffer = fs.readFileSync(path.join(__dirname + '../../../uploads/' + req.file.filename));
	}

  const product = await Product.create({
    name,
    img: imageBuffer,
    price,
    color,
    category,
    description,
    isAvailable,
  });

  res.json(product);
}

async function updateProduct(req, res) {
 const { name, price, color, category, description, isAvailable } = req.body;
	let imageBuffer = {
	"type": "Buffer",
	"data": ""
	}
	if (req.file != undefined) {
  imageBuffer = fs.readFileSync(path.join(__dirname + '../../../updates/' + req.file.filename));
	}
	const id = req.params.id;
  const result = await Product.update({
    name,
    price,
    color,
    img: imageBuffer,
    category,
    description,
    isAvailable,
  }, {
    where: { id },
    returning: true,
  });

  res.json(result);
}


async function deleteProduct(req, res) {
  const { id } = req.body;

  await Product.destroy({
    where: { id },
  });

  res.json({ message: 'Product deleted successfully' });
}

module.exports = {
  getAllProducts,
  uploadProduct,
  updateProduct,
  deleteProduct,
};

