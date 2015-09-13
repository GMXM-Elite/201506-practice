/**
 * TCP
 *
 */
/*
 * 回话中，服务器和客户端各提供一个socket，两个socket功能形成一个连
 * */

var net=require('net');
var util=require('util');
var fs=require('fs');
var server=net.createServer(function(socket){
    console.log(util.inspect(socket));//将对象转换为字符串
    server.getConnections(function(err,count){
        console.log('现在有'+count+'用户连上了');
        socket.setEncoding('utf8');
        socket.on('data',function(chunk){
            console.log(chunk);
            console.log('读取到的字节数',socket.bytesRead)
        });
        socket.on('end',function(){
            console.log('客户端已经关闭连接')
        })
    })
});
server.listen(8080,'0.0.0.0',function(){
    console.log('start listen at' + util.inspect(server.address()))
})