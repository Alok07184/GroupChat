const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Chats = sequelize.define('chats', {
    id:{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
    },
    name: {
        type : Sequelize.STRING,
        allowNull : false,
    },
    messages : {
        type : Sequelize.STRING, 
        allowNull : false,
    }
});
module.exports = Chats;