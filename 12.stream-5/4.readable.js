var Readable=require('stream').Readable;
var util=require('util');
util.inherits(Counter,Readable);
/**
 * 能从流里读取数据，读取的次数可定义
 * @param opt
 * @constructor
 */
function Counter(opt){
    Readable.call(this);
    this._start=opt.start;//1
    this._end=opt.end;//10

}

/**
 * 这是一个Readable子类，从1到10递增的触发数字，然后结束
 * Readable子类都必须提供一个_read方法从来抓取数据
 * Readable工作原理：将数据读入一个队列，当Readable事件发生时，用read方法，数据从队列里取出
 * push null表示结束
 * @private
 */
Counter.prototype._read=function(){
    if(this._start>this._end){
        this.push(null);//null 因为着流结束,触发end事件
    }else{
        this.push(new Buffer(this._start+''));//
    }
    this._start++;
}

var counter=new Counter({start:1,end:10});
counter.setEncoding('utf8');
counter.on('data',function(data){
    console.log(data)
}).on('end',function(){
    console.log('end')
})


