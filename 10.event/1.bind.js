/**
 * Created by Elite on 2015/9/12.
 */
var person={
    name:'zfpx',
    say:function(words){console.log(this.name+' say '+words);
    }
}
person.say('hello');

var p={
    name:'node.js'
}
person.say.call(p,'hello');//把p作为this

//永久绑定this
person.say.b(p,'hello1');

Function.prototype.b=function(context){
    var that=this;
    var args=Array.prototype.slice.call(arguments,1);
    return function(){
        that.apply(context,args);
    }
}
