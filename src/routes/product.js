const express = require("express");
const multer = require("multer");

const path = require("path")

const { uploadProduct, getAllProducts } = require("../controller/product")

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})

const upload = multer({ storage: storage })

router.get("/", (req, res) => {
    getAllProducts(req, res)
})


router.post("/upload", upload.single('img'), (req, res)=> {
    uploadProduct(req, res);
});

module.exports = router
