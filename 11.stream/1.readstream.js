/**
 * 1 readFile writeFile 缺点：将文件作为一个整体写入缓存：1、消耗内存打 2、文件大容易造成缓存溢出
 * 2 read write 缺点：需要非常精确的控制大小
 * 3 不关心文件的内容大小，只关注知否读到了数据
 * stream 流：一组有序的，有起点和终点的字节数据传输手段
 * 网络上传输的时候，先将对象转成字节流，再经过流的传输，到达目的地之后，再将流转成对象。
 * 很多类型，也有很多方法，也有很多事件
 * 参考：第4期详细讲解
 * 流式读取
 * fs.ReadStream
 * process.stdin标准输入流
 *
 * gzip
 * net.Socket
 * http.IncomingMessage
 */
var fs=require('fs');
var file=fs.createReadStream('./1.txt',{start:1,end:3});
file.on('open',function(){
    console.log('文件打开了');
})
//获取文件数据
file.on('data',function(data){
    console.log(data)
})
file.on('end',function(){
    console.log('file readed')
})
file.on('close',function(){
    console.log('file closed')
})
file.on('error',function(err){
    console.log(err);
})
