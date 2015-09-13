/**
 * Created by Elite on 2015/9/12.
 */
/*将文件write2，写入write3*/

var fs=require('fs');
var read=fs.createReadStream('./write2.txt');
var write=fs.createWriteStream('./write3');
/*
file.on('data',function(data){
    write.write(data);
});
file.on('end',function(data){
    write.end(data);
});*/

/*
read.on('data',function(data){
    var flag=write.write(data);
    if(!flag){
        read.pause();//暂停读文件，也不会再触发data事件
    }
})
 read.on('end',function(data){
     write.end(data);
 })

write.on('drain',function(){
    read.resume();//重新启动触发data事件
})
*/
read.pipe(write);
