/*You can also copy part of a buffer into another buffer by using the copy method like this:*/
var buffer1=new Buffer('this is the content of my buffer');
var buffer2=new Buffer(11);

var targetStart=0;
var sourceStart=8;
var sourceEnd=19;
buffer1.copy(buffer2,targetStart,sourceStart,sourceEnd);
console.log(buffer2.toString()); //the content