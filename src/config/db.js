const mongoose = require("mongoose");


const connectDb = async()=>{
    await mongoose.connect("mongodb://localhost:27017/shavath", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> console.log("Db connected successfully"))
        .catch(err => console.log(err))
}

module.exports =  connectDb
