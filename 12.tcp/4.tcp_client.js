var net=require('net');
var util=require('util');

var socket=new net.Socket();
socket.setEncoding('utf8');
socket.connect(9999,'192.168.1.107',function(){
    console.log(socket.remoteAddress,socket.remotePort,socket.localAddress,socket.localPort);
    socket.write('hello');
})
socket.on('data',function(data){
    console.log('服务器的问候'+data);
})
socket.on('error',function(){
    console.log(arguments);
});