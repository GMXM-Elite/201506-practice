/**
 * Created by Elite on 2015/9/4.
 */
var http=require('http');
http.createServer(function(req,res){
    res.end('hello');
}).listen(8080);