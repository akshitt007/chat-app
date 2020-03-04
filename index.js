var express = require('express');
var port = process.env.PORT || 8000;
var socket = require('socket.io');
var app = express();
const path = require('path');

app.set ('view engine','ejs');
app.set ('views',path.join(__dirname, 'views'));
app.use(express.static('assets'));

app.get('/',function(req,res){
    res.render('home')
});

var server = app.listen(port,function(){
    console.log("server is listing on port:8000");
});
var io = socket(server);
io.on('connection', function(socket){
    console.log("socket connected");
    socket.on("chat",function(data){
        io.sockets.emit("chat",data);

    });
socket.on('disconnect', function(){
        console.log('socket disconnected!');
    });
socket.on("typing",function(data){
    socket.broadcast.emit("typing",data);

});
   
});
