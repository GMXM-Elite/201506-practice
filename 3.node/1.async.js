/**
 * Created by Elite on 2015/9/4.
 */
var hello=function(){
    console.log('1')
};
setTimeout(hello,2000);
console.log('2')

var fs=require('fs');

fs.readFile('./index.md',function(err,data){
    console.log(err);
    console.log('3');
})
console.log('4');
var content=fs.readFileSync('./index.md');
console.log('5');

/*test*/

console.log(__dirname);