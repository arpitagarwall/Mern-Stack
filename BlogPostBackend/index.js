const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectDb = require("./config/database");
connectDb();

app.listen(PORT, ()=> {
    console.log("Successfull");
})

app.get("/", (req, res) =>{
    res.send("<h1>Homepage</h1>");
})