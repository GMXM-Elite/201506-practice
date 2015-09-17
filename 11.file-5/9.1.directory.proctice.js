var fs=require('fs');
var path=require('path');

//console.log(path.sep); // \

//级联创建目录
function makeP(str){
    var tempArray=str.split(path.sep);
    for(var i= 0,len=tempArray.length;i<len;i++){
            //var currPath=path.resolve(tempArray.slice(0,i+1).join('\\'));
            var currPath=process.cwd()+'\\'+tempArray.slice(0,i+1).join('\\');
            var exists=fs.existsSync(currPath);
            if(exists){//路径是否存在
                var stat=fs.statSync(currPath);
                if(stat.isFile()){//路径是否为文件
                    console.log('exist a file')
                }else{
                    console.log('dictionary is existed')
                }
            }else{
                fs.mkdirSync(currPath);
                console.log('the dictionary '+currPath+' is created !' )
            }
    }
}

//级联删除目录
function rmdirR(str){
    var tempArray=str.split(path.sep);

}

makeP('abc\\efg\\hij\\klmn');



