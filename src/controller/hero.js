const fs = require('fs');
const path = require('path');


const Hero = require('../models/Hero');

async function getAllHeroes(req, res) {
	const heroes = await Hero.findAll();
	res.json(heroes);
}

async function uploadHero(req, res) {
	const { name } = req.body;
	let imageBuffer = {
	"type": "Buffer",
	"data": ""
	} 
	if (req.file != undefined) {
		imageBuffer = fs.readFileSync(path.join(__dirname + '../../../heroes/' + req.file.filename));
	}
	const hero = await Hero.create({
		name,
		img: imageBuffer,
	});
	res.json(hero);
}
async function updateHero(req, res) {
	const { name } = req.body;
	let imageBuffer = {
	"type": "Buffer",
	"data": ""
	}
	if (req.file != undefined) {
  imageBuffer = fs.readFileSync(path.join(__dirname + '../../../heroupdates/' + req.file.filename));
	}
	const id = req.params.id;
	const result = await Hero.update({
	name,
	img: imageBuffer,
	},{
		where: { id },
		returning: true,
	});
	res.json(result);
}

async function deleteHero(req, res) {
	const { id } = req.body;

	await Hero.destroy({
		where: { id },
	});

	res.json({message: "Hero deleted succesfully"});
}

	module.exports = {
		getAllHeroes,
		uploadHero,
		updateHero,
		deleteHero,
	};
