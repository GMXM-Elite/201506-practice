# 1 path.normlize(path)
    将非标准化的路径转化成标准的路径
    console.log(path.normalize('./a///b//..//c/e..//'));
    // a\c\e..\

# 2 path.join([path1],[path2],[...])
    将参数字符串合并成一个路径 字符串
    console.log(path.join(__dirname,'a','b'));
    // d:\web\node\201506\9.path\a\b

# 3 path.resolve([from ..],to)
    把to解析为一个绝对路径
    如果to不是一个相对于from 参数的绝对路径，to会被添加到from的右边，直到找出一个绝对路径为止。如果使用from路径且仍没有找到绝对路径时，使用当时路径作为目录。
    console.log(path.resolve());//
    console.log(path.resolve('/a','b'));// d:\a\b
    console.log(path.resolve('a','/b'));// d:\b
    console.log(path.resolve('a','b'));// d:\web\node\201506\9.path\a\b
    

# 4 path.relative(from,to)
    获取从from到to的相对路径
    
# 5 path.isAbsolute(path)
    判断path是否为绝对路径
    
# 6 path.dirname(path)
    返回路径中文件夹的名称. 类似于Unix的dirname 命令.
    console.log(path.dirname('test/abc/index.html')) //test/abc

    
# 7 path.basename(path)
    返回路径中的最后哦一部分. 类似于Unix 的 basename 命令.
    console.log(path.basename('test/abc/index.html')) //index.html

# 8 path.extname(path)
    返回路径中文件的扩展名, 在从最后一部分中的最后一个'.'到字符串的末尾。 如果在路径的最后一部分没有'.'，或者第一个字符是'.'，就返回一个 空字符串。 例子：
    console.log(path.extname('test/abc/index.html')) //.html
    
# 9 path.sep
    特定平台的文件分隔工具 '\\'或者 '/,window系统如下：
    'console.log('foo\\bar\\baz'.split(path.sep)) //[ 'foo', 'bar', 'baz' ]
    
# 10 path.delimiter
    特定平台的路径分隔符, ; 或者 ':'.，window系统如下
    console.log(process.env.PATH); //获取路径
    //输出：C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Program Files\nodejs\;C:\Users\Elite\AppData\Roaming\npm
    
    console.log(process.env.PATH.split(path.delimiter))//路径分隔
    //输出：[ 'C:\\Windows\\system32',
           'C:\\Windows',
           'C:\\Windows\\System32\\Wbem',
           'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\',
           'C:\\Program Files\\nodejs\\',
           'C:\\Users\\Elite\\AppData\\Roaming\\npm' ]
    
    
    
    