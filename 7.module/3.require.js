/**
 * Created by Elite on 2015/9/12.
 */
//加载模块
var d1=require('./4.dog.js');
//取得模块的绝对路径
console.log(require.resolve('./4.dog.js'));
console.log(require('./package'));
console.log(Object.keys(require.cache));

//删除模块缓存
delete require.cache[require.resolve('./4.1.cat.js')];

console.log(Object.keys(require.cache));

