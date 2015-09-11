##require
# 多次加载会得到同样对象，第一次加载后缓存对象，之后就不在重复加载
{ [Function: require]
  resolve: [Function],

  main:
   { id: '.',
     exports: {},
     parent: null,
     filename: 'e:\\gitdemo\\7.module\\require.js',
     loaded: false,
     children: [],
     paths:
      [ 'e:\\gitdemo\\7.module\\node_modules',
        'e:\\gitdemo\\node_modules',
        'e:\\node_modules' ] },

  extensions:
   { '.js': [Function],
     '.json': [Function],
     '.node': [Function: dlopen] },

  registerExtension: [Function],

  cache:
   { 'e:\gitdemo\7.module\require.js':
      { id: '.',
        exports: {},
        parent: null,
        filename: 'e:\\gitdemo\\7.module\\require.js',
        loaded: false,

        paths: [Object] } } }

##取得模块的绝对路径
//取得模块的绝对路径
console.log(require.resolve('./4.dog.js'))