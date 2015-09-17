
#1 linux权限位置
mode: 438 /*=0666*/
0    6             6             6
    所有人        所属组        其他人
    u（user）      g(group)     o(other)
    1 执行
    2 写入
    4 读取
    

#2 fs.readFile(path,options,callback)
 读取文件
 @param options = { encoding: null, flag: 'r' };



#3 fs.writeFile(path,data,options,callback)
 写入文件
@param  options = { encoding: 'utf8', mode: 438 /*=0666*/, flag: 'w' };


#4 fs.appendFile(path,data,options,callback)
追加文件
@param  options = { encoding: 'utf8', mode: 438 /*=0666*/, flag: 'a' };

#5 base64
    将3个8位字节，转换为4个6位字节处理，之后在6位前面补位2个0，形成8偿还一个字节的形式
    由这些字符组成：A-Za-z0-9+/
    例：计算 珠 字对应的base64编码



#6 fs.open(path, flags, mode, callback)

同步打开文件
#6 fs.openSync(path, flags, mode)
异步打开文件

#7 fs.read(fd, buffer, offset, length, position, callback)
 从指定的文档标识符fd,读取文件数据

#7 fs.readSync(fd, buffer, offset, length, position)
从指定的文档标识符fd,读取文件数据
fs.read 函数的同步版本。 返回读取的字节数（bytesRead）。


#8 fs.write(fd, buffer, offset, length, position, callback)；
 通过文件标识fd，向指定的文件中写入buffer。
     *  fd
     * buffer 写入文件的缓存区 buffer
     * offset 缓存文件开始偏移量
     * length 写入的字节数
     * position 写入字节在文件中的开始位置
     * callback

#8 fs.writeSync(fd, data[, position[, encoding]])
通过文件标识fd，向指定的文件中写入buffer。
 同步版本的fs.write()。返回写入的字节数（bytesWritten）。

#9 fs.close
    关闭文件
#9 fs.closeSync
    同步关闭文件
#10 fs.unlink
    删除文件操作。
#10 fs.unlinkSync
    同步删除文件
#11 fs.mkdir
    创建目录
#12 fs.readdir
    读取目录
#13 fs.stat
    查看目录
#14 fs.exists
    判断目录是否存在
#15 fs.realpath(path,callback)
    从相对路径得到绝对路径
    
