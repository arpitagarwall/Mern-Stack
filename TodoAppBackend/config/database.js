const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("Successful"))
    .catch((error) => {
        console.log("Error in connection");
        console.log(error);
        process.exit(1);
    });
}

module.exports = dbConnect;