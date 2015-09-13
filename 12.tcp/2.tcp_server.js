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
var out=fs.createWriteStream('./out.txt');
var server=net.createServer(function(socket){
    console.log(util.inspect(socket));//将对象转换为字符串
    server.getConnections(function(err,count){
        console.log('现在有'+count+'用户连上了');
        socket.setEncoding('utf8');
/*        socket.on('data',function(chunk){
            console.log(chunk);
            console.log('读取到的字节数',socket.bytesRead)
        });*/
        socket.pipe(out,{end:false});

        //当客户端主动关闭的时候才会触发
        socket.on('end',function(){
            console.log('客户端已经关闭连接')
        })
        //无论客户端何种方式关闭都会触发
        socket.on('close',function(){

        })
        socket.on('end',function(){

        })
        //当所有客户端都关闭的时候，触发关闭服务器
        server.unref()
    })
});
server.listen(8080,'0.0.0.0',function(){
    console.log('start listen at' + util.inspect(server.address()))
})