/*给msg.txt生成数据，用于测试*/
var fs=require('fs');
fs.writeFileSync('msg.txt',new Buffer(127*1024));