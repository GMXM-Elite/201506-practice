var fs=require('fs');
var data=fs.readFileSync('./1.txt');
console.log(data);
fs.readFile('./1.txt','utf8',function(err,data){
    console.log(data);
})