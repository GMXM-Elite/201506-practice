var fs=require('fs');
var out=fs.createWriteStream('./test1.txt');
for(var i=0;i<100000;i++){
    var flag=out.write(i.toString());//是否写入成功
    console.log(flag);
}
out.on('drain',function(){
    console.log('缓存区中的数据全部输出');
});



