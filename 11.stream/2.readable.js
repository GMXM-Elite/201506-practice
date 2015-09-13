var fs=require('fs');
/*
* 非流式读取
* */

var file=fs.createReadStream('./129.txt');

file.on('readable',function(){
    console.log('readable');
    //console.log(file.read());
    //var data=file.read(64*1024);

});
file.on('end',function(){

});
