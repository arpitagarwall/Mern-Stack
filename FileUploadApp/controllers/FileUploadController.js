const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
    try{
        const file = req.files.file;
        console.log(file);
        let nameArr = file.name.split('.');
        let extension = nameArr[nameArr.length -1];

        let path = __dirname + "/files/" + Date.now() + `.${extension}`;

        file.mv(path, (error) => {
            console.log(error);
        });

        res.json({
            success:true,
            message:"Local file uploaded successfully"
        })
    }
    catch(error){

        console.log(error);

    }
}

function isFileTypeSupported(type, supportedType){
    return supportedType.includes(type);
}

async function uploadFiletoCloudinary(file,folder,quality){
    const options = {folder}
    options.resource_type = "auto";

    if(quality){
        options.quality = quality
    }

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req,res) => {
    try{

        const {name,tags,email} = req.body;

        const file = req.files.imageFile;

        const support =['jpg', 'jpeg', 'png'];

        let nameArr = file.name.split('.');
        let extension = nameArr[nameArr.length -1].toLowerCase();

        if(!isFileTypeSupported(extension, support)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        const response = await uploadFiletoCloudinary(file,"FileUpload");
        const fileData = await File.create({
            name,tags,email,mediaUrl:response.secure_url
        });

        res.status(200).json({
            success:true,
            data:fileData,
            message:"Image uploaded"
        })

    }
    catch(error){
        console.log(error);
         res.status(400).json({
            success:false,
            message:"Not worked"
        })

    }
}

exports.videoUpload = async (req, res) => {
    try{
        const {name,tags,email} = req.body;

        const file = req.files.videoFile;

        const support =['mp4', 'mov'];

        let nameArr = file.name.split('.');
        let extension = nameArr[nameArr.length-1].toLowerCase();

        if(!isFileTypeSupported(extension, support)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        const response = await uploadFiletoCloudinary(file,"FileUpload");
        const fileData = await File.create({
            name,tags,email,mediaUrl:response.secure_url
        });

         res.status(200).json({
            success:true,
            data:fileData,
            message:"Video uploaded"
        })

    }
    catch(error){
        console.log(error);
          res.status(400).json({
            success:false,
            message:"Not worked"
        })
    }
}

exports.imageReducerUpload = async (req,res) => {
    try{
        const {name,tags,email} = req.body;

        const file = req.files.imageFile;

        const support =['jpg', 'jpeg', 'png'];

        let nameArr = file.name.split('.');
        let extension = nameArr[nameArr.length -1].toLowerCase();

        if(!isFileTypeSupported(extension, support)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        const response = await uploadFiletoCloudinary(file,"FileUpload", 50);
        const fileData = await File.create({
            name,tags,email,mediaUrl:response.secure_url
        });

        res.status(200).json({
            success:true,
            data:fileData,
            message:"Image uploaded"
        })
    }
    catch(error){
         console.log(error);
          res.status(400).json({
            success:false,
            message:"Not worked"
        })
    }
}