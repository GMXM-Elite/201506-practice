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
    console.log('ϲ���Ͷ࿴����');
}
var gaofushuai= function(things){
    console.log('������ʮ̨');
}
girl.on('���˺þ�',diaosi);
girl.on('���˺þ�',gaofushuai);

girl.emit('���˺þ�',diaosi);