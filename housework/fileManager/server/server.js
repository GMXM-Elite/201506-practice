/*
 * 用nodejs实现的一个静态文件服务器
 1.有索引目录页，可以列出所有的文件和文件夹；
 2.点击文件夹，进入 下一级目录 ；
 3.点击文件可以解释执行该文件或下载该文件；比如是图片就显示图片，是html就显示html
 4.防止用户访问系统文件。
 5.再添加一个功能，就是给每个文件名目录添加一个删除按钮，一点就删除服务器上对应的文件
 * */
var server=require('http');
var fs=require('fs');
var path=require('path');
var mime=require('mime');

server.createServer(function(req,res){

    //获取文件的路径
    var filePath=path.resolve();

}).listen(8080);
