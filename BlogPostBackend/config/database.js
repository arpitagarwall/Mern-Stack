const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("Connection Successful"))
    .catch((error) =>{
        console.log("Connection Error");
        console.log(error);
        process.exit(1);

    })
}

module.exports = connectDb;