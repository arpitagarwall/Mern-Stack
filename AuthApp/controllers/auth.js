const bycrypt = require("bcrypt");
const user =  require("../models/userdata");
const jwt = require("jsonwebtoken");
const { options } = require("../routes/user");
require("dotenv").config();

exports.signup = async (req,res) =>{
    try{
        const {name,email,password,role} = req.body;

        const existingUser = await user.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User exists already"
            })
        }

        let hashPassword;
        try{
            hashPassword = await bycrypt.hash(password,10);
        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:"Error in hashing password"
            })
        }

        const userdata = await user.create({
            name,email,password:hashPassword,role
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    }
    catch (error){
        return res.status(500).json({
            success:false,
            message:error
        })
    }
}


exports.login = async(req,res) => {
    try{
        debugger;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
            success:false,
            message:"Please fill all the details"
         })
        }

        let userdata = await user.findOne({email});

        if(!userdata){
            return res.status(401).json({
            success:false,
            message:"User not registered"
            })
        }

        const payload = {
            email:userdata.email,
            id:userdata._id,
            role:userdata.role
        };

        if(await bycrypt.compare(password, userdata.password)){
            let token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});

            userdata.token = token;
            userdata.password = undefined;
            const options = {
                expires: new Date(Date.now() + 30000),
                httpOnly:true
            }
            res.cookie("token", token,options).status(200).json({
                 success:true,
                 token,
                 userdata,
                message:"User logged in successfully"
            })
        }
        else{
            return res.status(403).json({
            success:false,
            message:"Password incorrect"
            })
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure"
        })
    }
}