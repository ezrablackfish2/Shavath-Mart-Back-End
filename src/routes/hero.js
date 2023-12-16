const express = require("express");
const multer = require("multer");

const path = require("path");

const {
	uploadHero,
	getAllHeroes,
	updateHero,
	deleteHero,
} = require("../controller/hero");

const heroRouter = express.Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "heroes");
	},
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + Date.now() + ext);
	},
});

const upload = multer({ storage: storage });

const store = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "heroupdates");
  },
  filename: (req, file, cb) => {
    const exte = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + exte);
  },
});

const update = multer({ storage: store });


heroRouter.get("/", (req, res) => {
	getAllHeroes(req, res);
});

heroRouter.post("/upload", upload.single("img"), (req, res) => {
	uploadHero(req, res);
});

heroRouter.put("/update/:id", update.single("img"), (req, res) => {
	updateHero(req, res);
});

heroRouter.post("/delete", (req, res) => {
	deleteHero(req, res);
});

module.exports = heroRouter;
