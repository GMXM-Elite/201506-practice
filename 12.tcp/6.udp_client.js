/**
 * Created by Elite on 2015/9/12.
 */
var dgram=require('dgram');
var socket = dgram.createSocket('udp4');

var msg=new Buffer('你好');
socket.send(msg,0,msg.length,44444,'localhost',function(err,bytes){
    if(err){
        console.log('发送失败');
    }else{
        console.log('已发送了'+bytes+"个字节")
    }
})

socket.on('message',function(msg,rinfo){
    console.log('接收到了 '+msg.toString());
    console.log('客户端地址为 '+rinfo.address);
});