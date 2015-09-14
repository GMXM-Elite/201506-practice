#cookie
希望在不同的请求之间识别用户的身份
##步骤
- 第一次访问服务器，服务器客户端发送cookie（会员卡）
- 以后每次访问服务器的时候，客户端都要把cookie带上
##Cookie的属性

- Name
- Value 值
- Domain 域名
- Path 路径 pathnmae
- Expires/Max-Age
- HTTP HttpOnly不能通过js访问
- Secure 只能用于https

## 如何设置cookie

## cookie的问题
- 每次发送cookie
- 有可能被故意篡改，所以使用前要先校验
- 不要存储私密数据
- 设置正确domain

##cookie建议
- 尽量减少体积
- 正确设置域domain
- 有些服务器对请求有限制 apache 8k

##