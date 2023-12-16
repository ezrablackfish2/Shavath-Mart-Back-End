//const mongoose = require("mongoose")
//
//const UserSchema = new mongoose.Schema({
//    username: {
//        type: String,
//        unique: true,
//        required: true
//    },
//    password: {
//        type: String,
//        minLength: 6,
//        required: true
//    }
//})
//
//
//const User = mongoose.model('User', UserSchema);
//module.exports = User;

const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      len: [6, undefined],
    },
    allowNull: false,
  },
});

module.exports = User;

