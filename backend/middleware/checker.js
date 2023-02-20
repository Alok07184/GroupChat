const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = (req,res,next)=>{
    try{
        const token = req.header('Authorization');
       
        const user = jwt.verify(token, "oinsinoinspc5cd6v46d5v4d65v46d5v46d");
       
        User.findByPk(user.userId).then((user)=>{
            req.user = user;
            next();
        })
    }catch(err){
        res.status(401).json({message: err.message});
    }
}
module.exports = {authenticate};