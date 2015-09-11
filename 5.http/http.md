http协议请求过程：格式固定

1、请求方法 请求路径 使用的协议
2、request header信息
3、响应使用的协议 响应状态码 状态码文字描述
4、response header响应头详细信息

GET http://localhost:8080/ HTTP/1.1
Host: localhost:8080
Connection: keep-alive
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36
Accept-Encoding: gzip, deflate, sdch
Accept-Language: zh-CN,zh;q=0.8

HTTP/1.1 200 OK
Date: Fri, 11 Sep 2015 09:56:57 GMT
Connection: keep-alive
Transfer-Encoding: chunked

5
hello
0

http请求解析：
host:主机名称
connection:连接方式
cache-Control:缓存控制
Accept:可接受的请求文件格式
User-Agent:浏览器类型
Accept-Encoding:可接受的压缩编码方式
Accept-Language：可接受的编码语言

HTTP/1/1 200 OK  http协议版本、响应状态码
Date:日期
Connection:连接方式
Transfer-Encoding：传输编码方式

5 响应的长度
hello 响应的内容
0 结束符