/**
 * Created by Elite on 2015/9/11.
 */
//取参数
var http=require('http');
var mime=require('mime');//npm install mime
var fs=require('fs');
var path=require('path');

http.createServer(function(req,res){
    var url=req.url;
    //localhost:8080/params?name=zfpx&age=3
    console.log(url);//   /params?name=zfpx&age=3

    var urls=url.split('?');// ['/params','name=zfpx&age=3']
    var pathname=urls[0];//取得路径名
    var query=urls[1];
    var queryObj={};//定义空对象，以备取查询字符串
    if(query){
        var fields=query.split('&');
        fields.forEach(function(item,index,array){
            var vals=item.split('=');
            queryObj[vals[0]]=vals[1];
        });
    }

    if(pathname=='/'){
        res.setHeader('Content-Type','text/html');
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(pathname=='/ajax'){
        res.end('这是ajax返回的');
    }
    else{
        var filename="."+pathname;
        if(path.extname(pathname)=='.mp4'){
            res.setHeader('Content-Type','undefined');
        }else{
            res.setHeader('Content-Type',mime.lookup(pathname));
        }
        fs.readFile(filename,function(err,data){
            res.end(data);
        })
    }
   }).listen(8080);