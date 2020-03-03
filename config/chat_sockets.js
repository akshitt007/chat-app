module.exports.chatSockets = function(socketServer){
    var io = require('socket.io')(socketServer);

    io.sockets.on('connection', function(socket){
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
}