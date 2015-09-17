var fs=require('fs');
var out=fs.createWriteStream('./test1.txt');
/*
for(var i=0;i<100000;i++){
    var flag=out.write(i.toString());//是否写入成功
    console.log(flag);
}
out.on('drain',function(){
    console.log('缓存区中的数据全部输出');
});
*/

out.on('err',function(err){
    console.log(err);
})

out.write('123');
out.end('123');//readable.end
//out.write('456');

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