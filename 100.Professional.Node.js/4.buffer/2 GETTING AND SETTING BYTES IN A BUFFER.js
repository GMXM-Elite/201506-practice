/*2 GETTING AND SETTING BYTES IN A BUFFER*/
var buf1=new Buffer('my buffer content');
console.log(buf1[10]);

var buf2=new Buffer(1024);//1 When you create an initialized buffer, keep in mind that it will contain random bytes, not zeros.
console.log(buf2[99]);
buf2[99]=125;//2 set the 100th byte to 125
console.log(buf2[99]);

//you can obtain a buffer length by inquiring the length property like this
var buf3=new  Buffer(100);
console.log('buf3.length:'+buf3.length);
