/**
 * Created by Elite on 2015/9/11.
 */
//取参数
var http=require('http');
var fs=require('fs');
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
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(pathname=='/style.css'){
        fs.readFile('./style.css',function(err,data){
            res.end(data);
        })
    }else if(pathname=='/params'){
        res.end(JSON.stringify(queryObj));
    }
   }).listen(8080);