/*
* 如何从指定位置开始读取文件
* 0 stdin 标准输入
* 1 stdout 标准输出
* 2 stderr 错误输出
* */
var fs=require('fs');
//fd file description 打开文件的索引
fs.open('./msg.txt','r',function(err,fd){
    console.log(fd);
});

/*
* 读取文件 可以多次读取，每次读一小部分
* fd 文件描述符
* buffer 读到哪个buffer里
* offset buffer偏移量
* length 写多少个字节
* position 从文件哪个位置开始读
* callback
* */

/*
* 读取文件msg.txt 珠峰培训
* 1、第一次读,将 峰培 读入buffer
* 2、第二次读，将 训 读入buffer
* */
 fs.open('./msg.txt','r',function(err,fd){
    var buffer=new Buffer(9);
    fs.read(fd,buffer,0,6,3,function(err,bytesRead,buf){//第一次读
        console.log(bytesRead);
        console.log(buffer.toString());
        console.log(buffer==buf);
        fs.read(fd,buffer,6,3,9,function(err,bytesRead,buf){
            console.log(bytesRead);
            console.log(buffer.toString())
        })//第二次读
    });
})