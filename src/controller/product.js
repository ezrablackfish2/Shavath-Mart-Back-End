const fs = require("fs")
const path = require("path");

const Product = require("../models/Product")


async function getAllProducts(req, res) {
   const result = await Product.find({});

   res.send(result);
   res.end()
};

async function uploadProduct(req, res) {
    const { name, price, color } = req.body;
    const obj = {
        name: name,
        img: {
            data: fs.readFileSync(path.join(__dirname + '../../../uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        price: price,
        color: color
    }

    const result = await Product.create(obj);
    console.log(result);

    res.send(result);
    res.end();
}

module.exports = { getAllProducts, uploadProduct }
