/**
 * Created by Elite on 2015/9/12.
 */
var dgram=require('dgram');
var socket = dgram.createSocket('udp4');

var msg=new Buffer('���');
socket.send(msg,0,msg.length,44444,'localhost',function(err,bytes){
    if(err){
        console.log('����ʧ��');
    }else{
        console.log('�ѷ�����'+bytes+"���ֽ�")
    }
})

socket.on('message',function(msg,rinfo){
    console.log('���յ��� '+msg.toString());
    console.log('�ͻ��˵�ַΪ '+rinfo.address);
});