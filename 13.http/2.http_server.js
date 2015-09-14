/*
 * 1、http超文本传输协议 pop3 ftp smtp https从www服务器传输超文本到本地浏览器
 * 资源是通过uniform resource indentifier uri来表示
 * 2、报文 请求 响应
 * 3、
 *
 *
 * */

var http=require('http');
var url=require('url');
var querystring=require('querystring');
var util=require('util');

/*
 var server=http.createServer(function(req,res){

 })*/
//req incommingmessage 可读流 data end
//res response 刻度科协刘 write end

var server=http.createServer();
server.on('connection',function(){
    console.log('连接建立')
})
server.on('request',function(req,res){
    req.url='http://zhufeng:123@localhost:8080/?username=zhangsan#page'
    res.setHeader('name','zfpx');
    res.setHeader('age','6');
    res.status=404;
    var urlObj=url.parse(req.url,true);
    console.log(urlObj);
    /*console.log(req.method,req.httpVersionMajor,req.httpVersion);
    console.log(res.sendDate);
    console.log(req.url);
    console.log(req.method);
    console.log(req.httpVersion);*/
    //res.end('hello')
    res.end(http.STATUS_CODES[404]);
    res.end(http.STATUS_CODES[404]);

});

server.listen(8080);

