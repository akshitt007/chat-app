var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(8000,function(){
    console.log("server is listing on port:8000");
});