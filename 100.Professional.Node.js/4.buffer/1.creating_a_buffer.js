/*1 CREATING A BUFFER*/
var buf1=new Buffer('hello world!');
var buf2=new Buffer('8b76fde713ce','base64');
var buf3=new Buffer(1024);

console.log(buf1.toString());
console.log(buf2.toString('base64'));
console.log(buf3);

