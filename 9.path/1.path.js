var path = require('path');
var fs = require('fs');

/*
*@1  path.normlize 将非标准化的路径转化成标准的路径
* 1、解释 . 和 ..
* 2、多个斜杠会转成一个斜杠
* 3、window下的斜杠为转成正斜杠 /
* 4、如果以斜杠结尾会保留
* */
console.log(path.normalize('./a///b//..//c/e..//'));

//@2 将参数字符串合并成一个路径 字符串
console.log(path.join(__dirname,'a','b'));

//@3 以就用程序为根目录，作为起点，根据参数解析出一个绝对路径
console.log(path.resolve());//
console.log(path.resolve('/a','b'));// d:\a\b
console.log(path.resolve('a','/b'));// d:\b
console.log(path.resolve('a','b'));// d:\web\node\201506\9.path\a\b

//@4 获取两个路径之间的相对关系
console.log(path.relative(__dirname,'a'));
console.log(path.relative(__dirname,'/a'));

console.log('----------');

//@ 6 回路径中文件夹的名称. 类似于Unix的dirname 命令.
console.log(path.dirname('test/abc/index.html'));

//@ 7  返回路径中的最后哦一部分. 类似于Unix 的 basename 命令.
console.log(path.basename('test/abc/index.html'));

console.log(path.extname('test/abc/index.html'));
console.log('----------');
console.log('foo\\bar\\baz'.split(path.sep))

console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter))
