/**
 * Created by Elite on 2015/9/13.
 */

var http=require('http');
var url=require('url');
var querystring=require('querystring');
var cookieParser=require('./cookieParser');

var KEY='zfkey'; //和客户端约定的一个key
var sesion={};//回话数据存放的位置
var EXPIRE_TIME = 3600//过期时间

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    pathname=urlObj.pathname;
    var now=Date.now();
    if(pathname =='/favicon.ico'){
        res.end('404');
    }else{
        var cookieObj=querystring.parse(req.headers.cookie,';');
        if(cookieObj[KEY]){//老朋友

        }else{//新朋友
            var sessionObj={balance:100,expTime:new Date(new Date().getTime()+EXPIRE_TIME)}
            var sessionId=now+
        }
    }
}).listen(8080);