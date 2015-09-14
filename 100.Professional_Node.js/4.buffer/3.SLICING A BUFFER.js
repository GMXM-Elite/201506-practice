/*Once you have created or received a buffer, you may want to extract a part from it. You can slice a buffer to create another smaller buffer, specifying the starting and ending positions like this:*/

var buffer=new Buffer('this is the content of my buffer');
var smallBuffer=buffer.slice(8,19);
console.log(smallBuffer.toString());//the content
//First, if your program changes the parent buffer and any of that change touches any of the bytes of the child buffer, the child buffer will change. Because the parent and the child buffer are differentJavaScript objects, this may not be obvious to you and can introduce some bugs.
// Second, when you create a smaller buffer from a parent buffer this way, the parent buffer has to be kept around after the operation and not be reclaimed by the garbage collector, which can easily introduce a memory if you’re not careful.

