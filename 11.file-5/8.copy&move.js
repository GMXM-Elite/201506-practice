fs=require('fs');
var BUFF_SIZE=1024*8;//定义缓存区变量大小为：8k
/*
* 功能：拷贝一个文件
* @param src 原地址
* @param dest 目标地址
* */

function copy(src,dest){
    var buff=new Buffer(BUFF_SIZE);//得到缓存区
    var srcFd=fs.openSync(src,'r');//得到源文件描述符
    var desFd=fs.openSync(dest,'w');//得到目标文件描述符
    var readSoFar=0;//源文件当前的读取位置
    //var times=0;
    do{
        var readedBytes=fs.readSync(srcFd,buff,0,BUFF_SIZE,readSoFar);//一次读取BUFF_SIZE大小的数据
        fs.writeSync(desFd,buff,0,readedBytes,null);//将一次读取字节写入目标文件
        readSoFar+=readedBytes;
        //console.log('第'+(++times)+'次读取')
    }while(readedBytes==BUFF_SIZE);//只要是读取的字节数==缓冲区大小，就再进行下一次读取

    fs.close(srcFd);
    fs.close(desFd);
    fs.unlinkSync(src);
}

copy('msg4.txt','msg5.txt');

