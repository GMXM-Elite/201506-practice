/**
 * Created by Elite on 2015/9/4.
 */
var number =2;
var obj={
    number:4,
    fn1:(function(){
        this.number*=2;
        number=number*2;
        var number =3;
        return function(){
            this.number*=2;
            number*=3;
            console.log(number); //9
        }
    })()

};
var fn1 = obj.fn1;
console.log(number);//4
fn1();//9
obj.fn1();//27

