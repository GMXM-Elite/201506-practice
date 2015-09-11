/**
 * Created by Elite on 2015/9/11.
 */
/*命名空间，命名函数*/

var person={
    say:function(){
        console.log('person say hi');
    }
}
var dog={
    say:function(){
        console.log('dog say wangwang')
    }
}

person.say();
dog.say();

/*
 缺点：
 1、命名空间可能比较长
 2、缺少依赖管理

 */
