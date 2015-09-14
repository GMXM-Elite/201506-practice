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
var fs=require('fs');

var server=http.createServer();
server.on('connection',function(){
    console.log('连接建立')
})
server.on('request',function(req,res){
   var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    console.log(pathname);
    if(pathname=='/'){
        fs.createReadStream('./post.html').pipe(res);
    }else if(pathname=='/post'){
        var result=[];
        req.on('data',function(chunk){
            result.push(chunk);
        })
        req.on('end',function(){
            var body=Buffer.concat(result).toString();
            var bodyObj=querystring.parse(body);
            res.end(body);
        })
    }
});
server.listen(8080);

