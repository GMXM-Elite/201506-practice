var fs=require('fs');
/*
* 监视文件或目录
* curr fs.stat对象
* prev fs.stat对象
* */

var fun1= function (curr,prev) {
    //console.log(curr,prev);
    if(Date.parse(prev.ctime)!=Date.parse(curr.ctime)){
        console.log('文件修改了')
    }else if(Date.parse(curr.ctime)==0){
        console.log('文件被删除了')
    }else{
        console.log('文件刚刚创建！')
    }

}
fs.watchFile('msg.txt',{interval:0},fun1);
setTimeout(function(){
    fs.unwatchFile('msg.txt',fun1);
},5000);
