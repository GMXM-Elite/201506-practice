console.log('module my_module initializing...');
module.exports=function(){
    console.log('Hi!');
}
console.log('my_module initialized.');

/*
* 当其他模块引用这个模块时，第一缓存该模块，当再次引用只是引用缓存，因此：
* module my_module initializing...
* my_module initialized.
* 只输出一次
* */