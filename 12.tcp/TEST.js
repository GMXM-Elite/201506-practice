/**
 * Created by Elite on 2015/9/12.
 */
/*
* �ػ��У��������Ϳͻ��˸��ṩһ��socket������socket�����γ�һ����
* */

var net=require('net');
var util=require('util');
var fs=require('fs');
var server=net.createServer(function(){
    console.log(util.inspect(socket));
});
