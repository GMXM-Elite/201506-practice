##缓存的实现
1.响应头里提供Last-Modified头，表示资源的最后更新时间，If-Modifed-Since:
2.Etag 表示请求变量的实际值。第一次请求的时候，会生成这个值发给客户端，以后客户端请求时会带上这个值。If-None-Match （根据内容控制）

3.Cache-Control：缓存控制 no-cache：不缓存 max-age最大存活时间
4.Expires表示过期时间，在过期之间不去发请求检查有效，max-age优先级更高

request：If-Modifed-Since --> response : Last-Modified
request: If-None-Match -->Etag