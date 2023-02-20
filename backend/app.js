const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');

//Calling Internal File
const sequelize = require('./util/database')
const UserAuth = require('./router/auth');
const ChatAuth = require('./router/chating')
const User = require('./models/user');
const Chats = require('./models/chat');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors({
    origin : "http://127.0.0.1:5500"
}));


app.use(UserAuth);
app.use(ChatAuth);


//Associations
User.hasMany(Chats);
Chats.belongsTo(User);

sequelize.sync().then(()=>{
    console.log('DB CONNECTED');
}).catch(err=>console.log(err));

app.listen(4000, (err, res) => {
    console.log("BAckend Listneing");
});