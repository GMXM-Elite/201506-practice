/*Using the toString method you can, for instance, transcode a UTF-8 string into base64 like this:*/
var utf8String='my string';
var buf=new Buffer(utf8String);
var base64String=buf.toString('base64');
console.log(base64String);
var buf2=new Buffer(base64String);
console.log(buf2)
console.log(buf2.toString('utf8'))