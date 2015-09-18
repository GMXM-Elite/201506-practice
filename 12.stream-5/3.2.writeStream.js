/*
* 通过流实现文件拷贝 方法一
* */

var fs=require('fs');


var read=fs.createReadStream('./test2.txt');
var write=fs.createWriteStream('./test3.txt');
read.on('open',function(){
    console.log('read文件打开了')
})
read.on('close',function(){
    console.log('read 文件关闭了')
})
write.on('open',function(){
    console.log('write文件打开了')
})

write.on('close',function(){
    console.log('write文件关闭了')
})
var i=0;
read.on('readable',function(){
    var data;
    while(null!=(data=read.read())){
        write.write(data,function(){
            read.close();
            write.close();
        });
        console.log(++i);
    }
})