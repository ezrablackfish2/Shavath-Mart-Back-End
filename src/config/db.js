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

const mysql = require('mysql2');

const connectDb = async () => {
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'ezra',
    password: 'tutu@12345',
    database: 'ezra',
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

  // You can use the `db` connection to execute SQL queries in your application.

  // For example, you can create a table (if it doesn't exist) using SQL like this:
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS ezra (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      description TEXT
    )
  `;

  db.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
	  console.log("Table created");

  });
};

module.exports = connectDb;

