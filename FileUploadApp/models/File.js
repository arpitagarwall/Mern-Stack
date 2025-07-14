const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    mediaUrl:{
        type:String,
        require:true
    },
    tags:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})

fileSchema.post("save", async function(doc){
    try{

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASSWORD
            }
        })

        let info = await transporter.sendMail({
            from:'Vicky Sharma',
            to:doc.email,
            subject:'New File Uploaded',
            html:`<h2>Hello</h2> <p>File uploaded</p>`
        })

        console.log(info);

    }
    catch(error){

    }
})


const file = mongoose.model("File", fileSchema);
module.exports = file;