const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Hero = sequelize.define('Hero', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	img: {
		type: DataTypes.BLOB('long')
	},
});

sequelize.sync()
	.then(() => {
		console.log("Hero Table created or updated");
	})
	.catch(err => {
		console.error("Error syncing sequlize tables: ", err);
	});

module.exports = Hero;
