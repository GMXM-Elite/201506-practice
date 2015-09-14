# fs实现文件和目录的操作
## fs实现同步读取文件
    fs.readFileSync = function(path, options) {
        // options = { encoding: null, flag: 'r' };
    }
## fs实现异步读取文件
    fs.readFile = function(path, options, callback_) {
        //options = { encoding: null, flag: 'r' };
    }