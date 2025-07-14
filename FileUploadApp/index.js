const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const db =  require("./config/Database");
db.connect();

const cloudinary = require("./config/Cloudinary");
cloudinary.cloudinaryConnect();


const upload = require("./routes/FileUpload");
app.use("/api/v1/upload", upload);

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})