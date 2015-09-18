# 复习
- 1、readFile 把整个文件作为整体，存入缓存区
- 2、read 可以一小块小块读取，存入缓存区

# 问题
- 有时候我们不知道文件大小，而且也不关心文件大小。
- 只关心何时读数据，以及何时结束

# 解决方法
- node中用流stream来解决
- 流 stream 是一组有序的，有起点和终端的 字节传输手段
- 流都是EventEmitter的子类

# stream API
## stream.Readable
- 我们使用stream.Readable接口的对象，来将对象数据转成流数据。
- 常用的可读流
    - fs.ReadStream 读取文件流
    - http.IncommingMessge 客户端请求对象
    - net.Socket TCP客户端
    - gzip deflat数据压缩流
    
## fs.createReadStream(path,options);
- ReadStream<--Readable<--Stream
@param path
@param options{
    fd 文件索引
    flag
}

# 读取流分为两种模式data readable
- 1 流动模式 ： 迫使操作系统尽快读取数据，可监听data事件
    绑定一个 data 事件监听器到一个未被明确暂停的流会将流切换到流动模式，数据会被尽可能地传递。
- 2 非流动模式 （暂停模式）：需要通过代码去读取，当监听到readable事件时，才发送数据
    当一个数据块可以从流中被读出时，它会触发一个 'readable' 事件。
    在某些情况下，假如未准备好，监听一个 'readable' 事件会使得一些数据从底层系统被读出到内部缓冲区中。
    当内部缓冲区被排空后，一旦更多数据时，一个 readable 事件会被再次触发。
    
#stream pipe()

