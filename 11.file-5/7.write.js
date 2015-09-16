var fs=require('fs');
/* @1
* fd
 * buffer 写入文件的缓存区 buffer
 * offset 缓存文件开始偏移量
 * length 写入的字节数
 * position 写入字节在文件中的开始位置
 * callback

* */


/* fs.open('./msg1.txt','w',function(err,fd){
    fs.write(fd,new Buffer('珠峰培训'),3,6,0,function(err,bytesWritten,buffer){
        console.log('写入成功，写入了：'+bytesWritten+'个字节');
    });//写入 峰培 两字
})*/

// @2 position null 当前位置
/*fs.open('./msg2.txt','w',function(err,fd){
    fs.write(fd,new Buffer('珠峰培训'),0,6,null,function(err,bytesWritten,buffer){
        console.log('写入成功，写入了：'+bytesWritten+'个字节');
        fs.write(fd,new Buffer('珠峰培训'),6,6,null,function(err,bytesWritten,buffer){
            console.log('写入成功，写入了：'+bytesWritten+'个字节');
        })
    })
})*/

/*
* 写入文件直呼，要关闭文件
* */
fs.open('./msg3.txt','xw',function(err,fd){
    if(err)
    console.log(err);
    console.log(fd);
    fs.write(fd,new Buffer('珠峰培训'),0,6,null,function(){
        fs.fsync(fd,function(){
            fs.close(fd);
        })//把缓存区里的数据，立刻同步到目标文件里去，防止缓冲区数据丢失
    })
})
setTimeout(function(){
    fs.open('./msg3.txt','w',function(err,fd){
        if(err)
            console.log(err);
        fs.close(fd);//为什么这里关闭了，console.log(fd)还是有数据
        console.log(fd);
    })
},5000);
