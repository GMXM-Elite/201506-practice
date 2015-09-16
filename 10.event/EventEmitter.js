/**
 * Created by Elite on 2015/9/12.
 */
var EventEmitter=require('event').EventEmitter;
var util=require('util');
function Girl(name){
    this.name=name;
}
util.inherits(Person,EventEmitter);
//Person.prototype=new EventEmitter();

var girl=new Girl();

var diaosi= function(things){
    console.log('喜欢就多看看吧');
}
var gaofushuai= function(things){
    console.log('给你买十台');
}
girl.on('看了好久',diaosi);
girl.on('看了好久',gaofushuai);

girl.emit('看了好久',diaosi);