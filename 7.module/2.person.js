/**
 * Created by Elite on 2015/9/11.
 */
//var exports=module.exports={};
//require 是加载模块的方法
//exports 导出对象
//__filename 当前模块的绝对路径
//__dirname 当前模块的目录的绝对路径
//module 当前模块对象
function Person(name){
    this.name=name;
}
Person.prototype.getName=function(){
    return this.name;
}
Person.prototype.setName=function(name){
    this.name=name;
}
Person.prototype.name='神雕';
//导出是一个引用的时候，必须用module.exports
module.exports=Person;

//return exports;