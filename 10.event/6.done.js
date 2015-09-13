/**
 * 事件作用1：解耦合
 */
var fs=require('fs');
var va11;
var val2;
var count=0;
fs.read('./1.txt','utf8',function(err,data){
    va11=data;
})
fs.read('./2.txt','utf8',function(err,data){
    val2=data;
})

if(count==2){
    console.log(va11+" "+val2);
}


function done(){
    count++
}