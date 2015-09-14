/**

 * Created by Elite on 2015/9/12.
 */
function say1(){
    console.log('say1');
}
function say2(){
    console.log('say2');
}
function say(){
    console.log('say0');
}
/*定时器*/
setTimeout(say,1000);
/*放入本次事件循环头部*/
process.nextTick(say1);

/*放入下次事件循环底部*/
setImmediate(say2);

console.log('welcome1');
console.log('welcome2');