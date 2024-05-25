const express = require("express");
const multer = require("multer");

const path = require("path");

const {
  uploadProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

const { getReviewById, submitReview } = require("../controller/review");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

const store = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "updates");
  },
  filename: (req, file, cb) => {
    const exte = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + exte);
  },
});

const update = multer({ storage: store });

router.get("/", (req, res) => {
  getAllProducts(req, res);
});

router.post("/upload", upload.single("img"), (req, res) => {
  uploadProduct(req, res);
});

router.put("/update/:id", update.single("img"), (req, res) => {
  updateProduct(req, res);
});

router.post("/delete", (req, res) => {
  deleteProduct(req, res);
});

router.post("/review", (req, res) => {
  submitReview(req, res);
});

router.get("/reviews", (req, res) => {
  getReviewById(req, res);
});

module.exports = router;
