function utf8ToBase64(str){
/*    if(Object.prototype.toString.call(str)!='[object String]'){
        throw new Error('传输参数错误，必须为字符串')
    }*/
    var tempStr='',//定义临时字符串
        tempArray=[],//定义临时数组
        dictionary='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var buf=new Buffer(str);//1 字符串转为16进制 Buffer数组

    for(var i=0;i<buf.length;i++){//2 16进制 Buffer数组转为 2进制字符串
        tempStr+=buf[i].toString(2);
    }
    //3 将字符串按照，每6位拆分成数组
    for(var i=0;i<tempStr.length;i=i+6){
        tempArray.push(tempStr.slice(i,i+6));
    }
    //4 将数组中每项前补位00,再转换为10进制
    tempStr='';//清空临时字符串
    for(i=0;i<tempArray.length;i++){
        tempArray[i]='00'+tempArray[i];//补位00
        tempArray[i]=parseInt(tempArray[i],2)//转为10进制
        tempArray[i]=dictionary[tempArray[i]];//转换成字典对应的字母
        tempStr+=tempArray[i];
    }
    return tempStr;
}
var str='刘中辉';
str=utf8ToBase64(str);
console.log(str);