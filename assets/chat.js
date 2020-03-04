var socket = io.connect("http://localhost:5000"||window.location.hostname);

var username = document.getElementById("username");
var message = document.getElementById("message");
var btn = document.getElementById("send");
var feedback = document.getElementById("feedback");
var output = document.getElementById("output");
btn.addEventListener("click" , function(){
    socket.emit("chat", {message:message.value ,username:username.value});
  
 message.addEventListener("keypress",function(){
        socket.emit("typing",username.value);
    });
});
socket.on("chat",function(data){
    feedback.innerHTML = "";
   output.innerHTML+='<p><strong>'+ data.username +':</strong>'+ data.message + '</p>';

});
socket.on("typing",function(data){
  feedback.innerHTML = '<p><em>' + data + ' is typing.....</em></p>';

});