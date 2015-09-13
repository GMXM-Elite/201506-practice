/**
 * Created by Elite on 2015/9/12.
 */
    /*写入流*/
/*
*
* fs WriteSteam
* net.Socket 可读可写的流
* http.ServerResponse
* process.stdout 标准输出
* process.stderr 标准输出
* ungzip 解压缩
*
*
* */
var fs=require('fs');
/*var out=fs.createWriteStream('./write.txt');
for (var i=0;i<1024*10;i++){
    var flag=out.write(i.toString());
    console.log(flag)
}
/!**!/
out.on('drain',function(){
    console.log('缓存区输出完毕')
})*/
/*var out=fs.createWriteStream('./write2.txt');
out.on('error',function(){
    console.log(error);
});

out.write('123');
out.end('456');
//out.write('789');
*/
