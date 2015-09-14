/*
 * 回话中，服务器和客户端各提供一个socket，两个socket功能形成一个连
 * */

var net=require('net');
var util=require('util');
var fs=require('fs');
var server=net.createServer(function(){
    console.log(util.inspect(socket));
});