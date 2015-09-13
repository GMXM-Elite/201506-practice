/**
 * Created by Elite on 2015/9/12.
 */
/*
* UDP 非连接的协议，可以直接发送数据包
* 不要求按顺序到达传输层中
* 受网络影响 可以丢包
* 资源消耗少，处理速度快，适合视频 音频 QQ
* */

var dgram=require('dgram');
var socket = dgram.createSocket('udp4');

//监听对方的消息
socket.on('message',function(msg,rinfo){
    console.log('接收到了 '+msg);
    console.log('客户端地址为 '+rinfo.address);
    var buf=new Buffer('确认信息'+msg.toString());
    //向对方发消息
    socket.send(buf,0,buf.length,rinfo.port,rinfo.address);
});
socket.on('listening',function(){
    console.log('开始监听了')
})
//绑定IP地址和端口
socket.bind(44444,'localhost');//