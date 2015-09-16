
#1 linux权限位置
mode: 438 /*=0666*/
0    6             6             6
    所有人        所属组        其他人
    u（user）      g(group)     o(other)
    1 执行
    2 写入
    4 读取
    
#2 读取文件
fs.readFile(path,options,callback)

#3 写入文件 
fs.writeFile(path,data,options,callback)

#4 追加文件
fs.appendFile(path,data,options,callback)

#5 base64
    将3个8位字节，转换为4个6位字节处理，之后在6位前面补位2个0，形成8偿还一个字节的形式
    由这些字符组成：A-Za-z0-9+/
    例：计算 珠 字对应的base64编码