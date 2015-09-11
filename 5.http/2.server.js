/**
 * Created by Elite on 2015/9/11.
 */
//取路径
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    var url=req.url;
    if(url=='/'){
        fs.readFile('./index.html',function(err,data){
            console.log(data.toString());
            res.end(data);

        })
    }else if(url=='/style.css'){
        fs.readFile('./style.css',function(err,data){

            res.end(data);
        })
    }
   }).listen(8080);