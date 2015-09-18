/*
* 通过流实现文件拷贝 方法二
* */

var fs=require('fs');

var read=fs.createReadStream('./test2.txt');
var write=fs.createWriteStream('./test3.txt');


/*
read.on('data',function(data){
    var i=0;
    var flag=write.write(data);//当read流触发data事件，将该data写入
    if(!flag){//如果写入硬盘错误
        read.pause();//暂停读取流
        console.log(++i);
    }
})

read.on('end',function(){
    console.log('read 文件关闭了')
})


write.on('drain',function(){
    read.resume();
})
*/

read.pipe(write);
