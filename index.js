var express = require('express');
var port = process.env.PORT || 8000;
var socket = require('socket.io');
var app = express();
const path = require('path');
//app.set ('views',path.join(__dirname, 'views'));
app.set ('view engine','ejs');
app.set ('views',path.join(__dirname, 'views'));
app.use(express.static('assets'));
const chatServer = require('http').Server(app);
var chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(process.env.PORT||5000);
console.log('chat server is listening on port 5000');


app.get('/',function(req,res){
    res.render('home')
});

var server = app.listen(port,function(){
    console.log("server is listing on port:8000");
});
