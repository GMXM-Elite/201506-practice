var net = require('net');
var util = require('util');
var fs = require('fs');
var server = net.createServer(function (socket) { //net.Socket
    console.log(util.inspect(socket.address()));//将对象转成字符串
    server.getConnections(function (err, count) {
        console.log('现在有' + count + '用户连接上了');
        socket.setEncoding('utf8');
        socket.on('data', function (chunk) {
            console.log(chunk);
            console.log('读取到的字节数', socket.bytesRead);//读取到的字节数
        });
        socket.on('end', function () {
            console.log('客户端已关闭连接');
        })
    });
})

server.listen(8080, '0.0.0.0', function () {
    console.log('start listen at ' + util.inspect(server.address()));
});