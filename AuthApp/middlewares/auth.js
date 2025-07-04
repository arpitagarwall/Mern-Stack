const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next) =>{
    try{
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing"

            });
        }

        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user = decode;
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:"Token invalid"
            })
        }

        next()
    }
    catch(error){
         return res.status(401).json({
                success:false,
                message:"Token verification gone wrong"
            })
    }
}

exports.isStudent = (req, res, next) => {
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"Protected route for students"
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
                success:false,
                message:"User role cannot be verified"
            })
    }
}

exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"Protected route for admin"
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
                success:false,
                message:"User role cannot be verified"
            })
    }
}