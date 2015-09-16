var fs=require('fs');
//尽量使用异步的方式，只有要读取文件作为前置条件的时候，才采用同步读取文件方式
/*1 同步方式*/
var content=fs.readFileSync('./msg.txt','utf8');
console.log(content);

/*2 异步方式*/
//回调函数什么时候执行不知道
fs.readFile('./fish.txt','utf8',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log('fish');
    }
})

fs.readFile('./msg.txt',function(err,data){
    if(err){
        console.log(err);    }
    else{
        console.log('msg');
    }
})

