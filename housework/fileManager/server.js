/*
 * 用nodejs实现的一个静态文件服务器
 1.有索引目录页，可以列出所有的文件和文件夹；
 2.点击文件夹，进入 下一级目录 ；
 3.点击文件可以解释执行该文件或下载该文件；比如是图片就显示图片，是html就显示html
 4.防止用户访问系统文件。
 5.再添加一个功能，就是给每个文件名目录添加一个删除按钮，一点就删除服务器上对应的文件
 * */
var http=require('http');
var fs=require('fs');
var path=require('path');
var url=require('url');
var mime=require('mime');

var server=http.createServer(function(req,res){
/* for(var i=0;i<arguments.length;i++){

  console.log(arguments[i]);
  console.log('--------------------------------------------------');
 }*/

//1 获取当前运行的js服务器文件的路径
    var filePath=path.resolve();
    //console.log('filePath: '+filePath);

    //2 icon请求忽略
    if(req.url=='/favicon.ico'){
        res.end();
        return;
    }

//3 访问请求的文件地址标准化
    var reqPath=path.normalize(decodeURIComponent(req.url));
    //console.log('reqPath: '+reqPath);

//4 获取请求的文件的路径
    var pathName=path.join(filePath,reqPath);
    //console.log('pathName: '+pathName);

//5 判断文件是否存在
    fs.exists(pathName,function(exists){

        if(exists){ //5.1 如果路径存在
            if(fs.statSync(pathName).isDirectory()){//5.1.1 如果是目录
                var addStr='<link rel="stylesheet" href="/app/stylesheet/index.css">';
                addStr+='<h1><a href="/">FileManager System Directory</a></h1>';
                addStr+='<ul>';

                //读取当前目录
                fs.readdir(pathName,function(err,files){
                    //5.1.1.1 写入页面头部
                    res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"});

                    //5.1.1.2 写入页面内容
                    if(err){
                        console.log(err);
                    }else{
                        files.forEach(function(file,index,array){

                            //1 将绝度路径转换为相对路径
                            if(pathName !=filePath){
                                pathName = pathName.replace(filePath,'');
                            }
                            //2 将操作系统路径符号'\'，转为网络请求路径'/'；
                            var filePathForLink=path.join(pathName,file).replace(/\\/g,'/');
                            //console.log('filePathForLink'+filePathForLink);

                            //3 给文件和目录加不同的格式
                            if(path.extname(file)){
                                addStr+=' <li><a href="'+filePathForLink+'">'+file+'</a></li>';
                            }else{
                                addStr+=' <li class="blue"><a href="'+filePathForLink+'">'+file+'</a></li>';
                            }
                        });
                    }
                    //5.1.1.3 写入页面内容并关闭流
                    res.end(addStr+'</ul><p>提示：以上目录列表，蓝色是文件夹，可点击继续进入下一节。</p>');
                });
            }else if(fs.statSync(pathName).isFile()){//5.1.2 如果是文件
                res.writeHead(200,{"Content-Type": mime.lookup(path.extname(pathName)) + ";charset=utf-8"});
                fs.readFile(pathName,{flag:'r'},function(err,data){
                    if(err){
                        res.end(err);
                    }else{
                        res.end(data);
                    }
                })
            }
        }else{ //5.2 文件不存在
            res.writeHead(404,'the file was not found on this server.',{'Content-type':'text/html'});
            res.write('<span style="color:red">"' + pathName + '"</span> was not found on this server.');
            res.end();
        }
    });

});
server.listen(8080);
