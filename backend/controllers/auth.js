const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


//generate token
function generateAccessToken(id, name){
    return jwt.sign({userId : id, name}, "oinsinoinspc5cd6v46d5v4d65v46d5v46d");
}

exports.signup = async(req,res,next)=>{
    try{
        const {name,email,phone,password} = req.body;
        bcrypt.hash(password, 10, async(err, hash)=>{
            if(!err){
                const result = await User.create({name, email, phone, password : hash});
                res.status(200).json({message : "User Created", result});
            }
        })
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

exports.signin = async(req, res, next)=>{
    try{
        const {email , password} = req.body;
        const user = await User.findAll({where : {email : email}});
        if(user.length > 0){
            bcrypt.compare(password, user[0].password, (err, result)=>{
                if(!err){
                    res.status(200).json({success : true , message : "User Logged in", token  : generateAccessToken(user[0].id , user[0].name)});
                }
                else{
                    res.status(401).json({success :false, message : "Invalid Credential"});
                }
            })
        }
    }catch(err){
        res.status(500).json({success :false, message : err.message});
    }
}