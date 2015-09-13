/**
 * Created by Elite on 2015/9/12.
 */
var fs=require('fs');
var va11;
var val2;
var count=0;
fs.readFile('./1.txt','utf8',function(err,data){
    va11=data;
    done();
})
fs.readFile('./2.txt','utf8',function(err,data){
    val2=data;
    done();
})

if(count==2){
    console.log(va11+" "+val2);
}


function done(){
    count++
}