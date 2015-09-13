/**
 * 观察者 发布订阅模式
 */
function Event(name){
    this.name=name;
    this._evetnts=[];
}
//监听事件
Event.prototype.on=function(eventName,listener){
    if(this._evetnts[eventName]){
        this._evetnts.push(listener);
    }else{
        this._evetnts[eventName]=[listener]
    }
}
//发射事件
Event.prototype.emit=function(eventName){
    var handler=this._evetnts[eventName];
    var args=Array.prototype.slice.call(arguments,1);
    for(var i= 0,len=args.length;i<len;i++){
        handler.call(this,args);
    }
}

Event.prototype.removeListener=function(eventName,listener){
    if(this._evetnts[eventName]){
        this._evetnts[eventName].pop(listener);
    }


}
var teacher=new Event('teacher');
var me=function(name){
    console.log('I beat '+name);
}
teacher.on('fight',me);

var wife=function(name){
    console.log('wife beat '+name);
}
teacher.on('fight',wife);

teacher.removeListener('fight',wife);
teacher.emit('fight','qihang');