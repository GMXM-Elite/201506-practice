/*
* #5 base64
 将3个8位字节，转换为4个6位字节处理，之后在6位前面补位2个0，形成8偿还一个字节的形式
 由这些字符组成：A-Za-z0-9+/
 例：计算 珠 字对应的base64编码*/

//1、将文字转为Buffer对象--16进制
var buf=new Buffer('珠峰');
console.log(buf);

//2、将Buffer转换成--2进制数
var str='';
for(var i=0;i<buf.length;i++){
    str+=buf[i].toString(2);
}
console.log(str);//输出 珠 字的2进制码

//3、将二进制 切成6位一组数组
var arr=[];//定义一个数组接收6位分隔的二进制数
for(var j=0;j<str.length;j=j+6){
    var tempStr=str.slice(j,j+6);
    arr.push(tempStr);
}
console.log(arr); //输出6位分隔的二进制数 数组

// 4、数组中二进制，每项补位00
//'00'+数组项
for(var x=0;x<arr.length;x++){
    arr[x]='00'+arr[x];
}
console.log(arr);//输出6位分隔的二进制数

//5 数组中没项转换为10进制
for(var x=0;x<arr.length;x++){
    arr[x]=parseInt(arr[x],2);
}
console.log(arr);//输出6位分隔的二进制数

//6 定义一个编码字典：64个字符组成的字符串
var str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
console.log(str.length);

//7 根据编码字符串编码
var tempStr='';//定义一个字符串接收base64编码结果
for(i=0;i<arr.length;i++){
    tempStr+=str[arr[i]];
}
console.log(tempStr);


