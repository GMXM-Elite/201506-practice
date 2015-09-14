/*
 * 1、http超文本传输协议 pop3 ftp smtp https从www服务器传输超文本到本地浏览器
 * 资源是通过uniform resource indentifier uri来表示
 * 2、报文 请求 响应
 * 3、
 *
 *
 * */

/*
* 带文件的表单提交
* */
var http=require('http');
var url=require('url');
var querystring =require('querystring');
var util=require('util');
var fs=require('fs');
var formidable=require('formidable'); //扩展模块处理表单
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
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            console.log(fields);
            console.log(files);
            fs.createReadStream(files.avatar.path)
                .pipe(fs.createWriteStream('./upload//'+files.avatar.name));
            res.setHeader('Content-Type','text/html');
            res.write('<h1>'+fields.username+'</h1>');
            res.write('<h1>'+fields.password+'</h1>');

            res.write('<img src="/upload/'+files.avatar.name+'">');
            res.end();
        })
    }else{
        fs.exists('.'+pathname,function(exits){
            if(exits){
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode =  404;
                res.end(http.STATUS_CODES[404]);
            }
        })
    }
});
server.listen(8080);

