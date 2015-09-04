/**
 * Created by Elite on 2015/9/4.
 */
/*
*
*
* */
console.log(num);//undefined
var num=9;//变量时声明不赋值
hello();
//world();
function hello(){
    console.log('先执行后定义')
}
var world=function(){
    console.log('先执行后解释可以么？')
}