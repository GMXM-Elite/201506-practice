/**
 * Created by Elite on 2015/9/12.
 */
var fs = require('fs');
fs.readFile('./file.txt',function(err,data){
    //<Buffer 31 32 33>
    console.log(data);
})