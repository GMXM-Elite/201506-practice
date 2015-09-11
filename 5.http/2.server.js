/**
 * Created by Elite on 2015/9/4.
 */
    /*饭店模板*/
var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    var url=req.url;
    //params?name=zfpx&age=1;
    var urls=url.split('?');
    var pathname=urls[0];
    var query=urls[1];
    var queryObj={};
    if(query){
        var fields=query.split('&');
        fields.forEach(function(filed))
    }
    if(url=='/'){
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(url == '/style.css'){
        fs.readFile('./style.css',function(err,data){
            res.end(data);
        })
    }
}).listen(8080);

/*
function resp(url,response){
    fs.readFile(url,function(err,data){
        response.end(data);
    })
}*/
