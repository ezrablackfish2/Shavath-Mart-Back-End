//const mongoose = require("mongoose");
//
//
//const connectDb = async()=>{
//    await mongoose.connect("mongodb://localhost:27017/shavath", {
//        useNewUrlParser: true,
//        useUnifiedTopology: true
//    }).then(()=> console.log("Db connected successfully"))
//        .catch(err => console.log(err))
//}
//
//module.exports =  connectDb

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shavath', 'shavath', 'Shavath@1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;


//const { Sequelize } = require('sequelize');
//
//const sequelize = new Sequelize('ezra', 'ezra', 'tutu@12345' {
//  host: 'localhost',
//  dialect: 'mysql',
//});
//
//sequelize.query('CREATE DATABASE IF NOT EXISTS ezra;')
//  .then(() => {
//    console.log('Database "ezra" created or already exists.');
//  })
//  .catch(err => {
//    console.error('Error creating database "ezra":', err);
//  });
//
//module.exports = sequelize;




//const mysql = require('mysql2/promise');
//
//const connectDb = async () => {
//  const connection = await mysql.createConnection({
//    host: 'localhost',
//    user: 'ezra',
//    password: 'tutu@12345',
//    database: 'ezra',
//  });
//
//  console.log('Db connected successfully');
//  return connection;
//}
//
//module.exports = connectDb;

