#模块
## JS先天不足
- JS没有原生的模块系统，不支持封闭的作用域和依赖管理
- 没有标准库，不支持文件系统和流
- 没有包管理工具，不能支持自动加载和安装依赖 (roby python php都支持)

## Common.js
以模块划分所有的功能。每一个JS都是一个模块
实现了require方法。
npm 基于commonjs实现了自动加载安装依赖

## 优点
- 增加了内聚性
- 有助于分工
- 有助于重构
- 提高代码质量和开发效率

##加载模块的方法
1.核心模块的加载 (http fs path )require('http')
2.文件模块 我们自己写的都叫文件模块

#加载文件模块
##三种类型
1  .js脚本：先督导内存，再进行执行
2  .json：转为为json对象
3. .node：二进制文件，不需要再编译，可以直接使用

#查找文件模块的流程

#package.json

#发布包
npm publish
user:elite
password:
email:596553783@qq.com