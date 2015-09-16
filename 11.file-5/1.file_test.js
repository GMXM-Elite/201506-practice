var fs=require('fs');
fs.writeFileSync('./fish.txt',new Buffer(1024*128*1024));
