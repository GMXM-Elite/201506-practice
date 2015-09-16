var fs=require('fs');
/*
* 可以完整的写入一个文件
* fs.writeFile
* fs文件
* */

/*fs.writeFile('./write.txt','第一行',{encoding:'utf8',flag:'w'},function(err,data){
/!*    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }*!/
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})

fs.writeFile('./write.txt','第二行',{encoding:'utf8',flag:'a'},function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})*/

fs.appendFile('./write.txt',new Buffer('第三行'));

fs.readFile('./baidu.jpg','base64',function(err,data){
    fs.writeFile('./b.png',data,'base64',function(data){
        console.log(data)
    })
});
