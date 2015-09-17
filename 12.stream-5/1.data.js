/*
* 1、readFile 把整个文件作为整体，存入缓存区
* 2、read 可以一小块小块读取，存入缓存区
*
* */

var fs=require('fs');

var rs=fs.createReadStream('msg.txt');
//1、打开文件，触发open事件
rs.on('open',function(){
    console.log('opened')
});

//2、读取文件，每次读64k,读到数据时触发data事件
rs.on('data',function(data){
    console.log('data:');
})

//3、当读到文件末尾时，触发end事件
rs.on('end',function(data){
    console.log('end')
});

rs.on('close',function(){
    console.log('close')
})