/**

 * Created by Elite on 2015/9/12.
 */
function say1(){
    console.log('say1');
}
function say2(){
    console.log('say2');
}
function say(){
    console.log('say0');
}
/*��ʱ��*/
setTimeout(say,1000);
/*���뱾���¼�ѭ��ͷ��*/
process.nextTick(say1);

/*�����´��¼�ѭ���ײ�*/
setImmediate(say2);

console.log('welcome1');
console.log('welcome2');