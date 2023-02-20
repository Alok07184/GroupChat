const Sequelize = require('sequelize');

const sequelize = new Sequelize("group-chat", "root", "@Aloksingh00",{
    dialect : 'mysql',
    host : 'localhost',
});

module.exports = sequelize;