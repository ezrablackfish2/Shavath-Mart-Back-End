require("dotenv").config()
const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")

const connectDb = require("./config/db")

const app = express();
connectDb()

const corsOptions = {
  origin: 'http://localhost:3001',
  origin: 'http://localhost:3000',
  origin: 'https://shavath.vercel.app/',
  optionsSuccessStatus: 200, 
};

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api", productRoute)

app.listen(3000, ()=> {
    console.log("The application is running on 3000")
})


