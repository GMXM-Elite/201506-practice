var fs=require('fs');
var rs=fs.createReadStream('msg.txt');

rs.on('readable',function(){
    console.log('---------------readable-------------')
    var data;
    while(null!=(data=rs.read())){//读取缓存区

    }
});

rs.on('end',function(){
    console.log('end');
});




