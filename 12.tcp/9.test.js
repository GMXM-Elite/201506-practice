/**
 * Created by Elite on 2015/9/12.
 */
/**
 * 1.创建服务器
 * 2.客户可以连接服务器
 * 3.可以统计当前的在线人数
 * 4.接收用户的聊天信息
 * 5.当用户进入或退出时通知所有人
 **/
var net = require('net');
var util = require('util');
var count =0;
var clients = {};//存放所有的用户
var server = net.createServer(function(socket){
    var nickname;//设置用户的呢称
    socket.write('欢迎光临,请输入用户名\r\n');
    socket.setEncoding('utf8');
    socket.on('data',function(chunk){
        if(nickname){
            broadcast(null,nickname+":"+chunk);
        }else{
            if(clients[nickname]){
                socket.write('用户被占用，请重新输入用户名\r\n');
            }else{
                chunk  =  chunk.replace('\r\n','');
                nickname = chunk;
                clients[nickname] = socket;
                broadcast(null,"系统:"+nickname+'加入了聊天室,现在已经有'+(++count)+'人');
            }
        }
    });
    socket.on('close',function(){
        delete  clients[nickname];
        socket.destroy();
        broadcast(nickname,"系统:"+nickname+'离开了聊天室,现在已经有'+(--count)+'人');
    });

    function broadcast(nickname,msg){
        msg += "\r\n>";
        for(var name in clients){
            if(name != nickname){
                clients[name].write(msg);
            }
        }
    }
})

server.listen(8080);