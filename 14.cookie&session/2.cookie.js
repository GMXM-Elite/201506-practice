/*
* 服务器端向客户端写入cookie，写入response Header中
* */
var http=require('http');
var url=require('url');
var querystring=require('querystring');
var cookieParser=require('./cookieParser');


http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname =='/favicon'){
        res.end('404')
    }else if(pathname =='/write'){
        res.statusCode=200;
        //res.setHeader('Set-Cookie',['gendor=6;Domain=lzh.com','age=6']);//只有localhost才发送cookie
        //res.setHeader('Set-Cookie',['gendor=6;Expire='+new Date(),'age=6;Expire='+new]);//设置cookie过期时间 05:43
        //res.setHeader('Set-Cookie',['gendor=6','age=6']);//
        res.setHeader('Set-Cookie',[cookieParser.serialize(
            {
                domain:'localhost',
                path:'/read',
                httpOnly:true,
                maxAge:3600,
                expires:new Date(new Date().getTime()+3600*100),
                secure:true

            }
        )]);//
        res.end('ok');
    }else /*if(pathname =='/read')*/{
        var cookie=req.headers.cookie;
        //console.log(cookie);
        var cookieObj=querystring.parse(cookie,';');
        res.end(JSON.stringify(cookieObj));
    }
}).listen(8080);
