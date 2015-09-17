var fs=require('fs');
# 1 创建目录
/*fs.mkdir('./a/a.txt',function(err){
    if(err)
        console.log(err);
    else
        console.log('创建成功')
});*/
# 2 读取目录
fs.readdir('a',function(err,files){
    if(err){
        console.log(err);
    }else{
        console.log(files);
    }
})

# 3 查看文件或目录的信息

fs.stat('a',function(err,stat){
    console.log(stat);
    console.log(stat.isFile());//是否是文件
    console.log(stat.isDirectory());//是否是目录
    console.log(stat.size)//查看文件大小
})
/*{ dev: 1980301761,
 mode: 16822,
 nlink: 1,
 uid: 0,
 gid: 0,
 rdev: 0,
 blksize: undefined,
 ino: 1125899906847810,
 size: 0,
 blocks: undefined,
 atime: Thu Sep 17 2015 10:33:48 GMT+0800 (中国标准时间),//最后访问时间 access time
 mtime: Thu Sep 17 2015 10:33:48 GMT+0800 (中国标准时间),//最后修改时间
 ctime: Thu Sep 17 2015 10:33:48 GMT+0800 (中国标准时间),//创建时间
 birthtime: Thu Sep 17 2015 10:28:13 GMT+0800 (中国标准时间) }//出生时间
* */

# 4、判断文件是否存在
fs.exists('a',function(exists){
    console.log(exists);
})

# 5 从相对路径得到绝对路径
fs.realpath('a',function(err,path){
    console.log(path);
})
# 6  从相对路径得到绝对路径
 var path=require('path');
console.log('path\n'+path.resolve('a'));

# 7  fs.utimes(path, atime, mtime, callback)
    修改目录信息
    fs.utimes('./msg.txt',new Date(),new Date(),function(){
    
    });

# 8 fs.chmod(path,mode,callback)
    修改文件权限 
    fs.chmod('./meg.txt',0600,function(){
    
    })

# 9 fs.rename(oldPath,newPath,callback);
     重命名文件
    fs.rename('message.txt','msg.txt',function(){
    
    })

# 10 fs.truncate(path,len,callback)
     截取文件长度
    var currPath='msg2.txt';
    fs.stat(currPath,function(err,stat){
        console.log('before',stat.size);
        fs.truncate(currPath,3,function(){
            fs.stat(currPath,function(err,stat){
                console.log('after',stat.size);
            })
        })
    })

# 11 fs.rmdir(path,callback);
    删除目录 
    fs.rmdir('a/a.txt',function(err,date){
        if(err){
            console.error(err);
        }
    })
    
#12 fs.watchFile(filename, [options], listener)
    监视filename指定的文件的改变
    
#12 fs.unwatchFile(filename, [listener])
    停止监视文件名为 filename的文件

