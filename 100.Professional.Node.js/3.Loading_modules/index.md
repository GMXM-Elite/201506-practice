# 第3章 记载模块总结
##Node取消了JavaScript默认的全局名称空间，而用CommonJS模块系统取而代之。
 - 更好的组织代码
 - 避免一些安全问题和错误
 
## 可以使用require()函数从文件或者文件夹加载核心模块、第三方模块或者自定义模块。
 - 可以使用相对或者绝对文件路径加载非核心模块。
 - 如果将模块放入node_modules文件夹或者使用NPM安装模块，也可以通过模块名加载。
 
##还可以编写JavaScript文件导出 表示模块API 的对象，因此创建自定义模块
