
/*
* 实现一个静态文件服务器(缓存、压缩、断点续传)
* */

var http=require('http');
var url=require('url');
var querystring=require('querystring');
var config=require('./config');

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    pathname=urlObj.pathname;
    if(pathname.slice(-1)=='/'){
        pathname=pathname+'index.html';
        }
    var realPath=path.join('public'+pathname);
    var ext=path.extname(realPath);//获取文件扩展名
    if(ext.match(config.Expires.fileMatch)){
        fs.stat(realPath,function(err,stat){
            if(err){
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.write('资源不存在');
                res.end();
            }
            var lastModified=stat.mtime.toUTCString();// 这个不理解
            if(){

            }
        })
    }
}).listen(8080);