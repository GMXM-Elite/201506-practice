#session
为了解决敏感数据问题，session，要数据保存在服务器端，客户端无法修改，也不需要每次请求时传递。

#实现原型
##1.基于cookie
第一次访问的时候，服务器端生成sessionId,放在客户端的cookie里