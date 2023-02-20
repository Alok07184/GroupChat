const Chats = require('../models/chat');

exports.postMessage = async(req,res,next)=>{
    try{
        console.log(req);
        const {message} = req.body;
        const userId = req.user.id;
        const name = req.user.name;
        console.log(message , userId, name);
        const result = await Chats.create({name, messages : message,userId});
        res.status(200).json(result);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.getMessage = async(req,res,next)=>{
    try{
        console.log(req.body);
        const results = await Chats.findAll({});
        res.status(200).json(results);
    }catch(err){
        res.status(500).json(err);
    }
}