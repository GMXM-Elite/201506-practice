/**
 * Created by Elite on 2015/9/12.
 */
function Person(){

}
Person.prototype.name='zfpx';
Person.prototype.showName=function(){
    return this.name;
}
function Animal(name,food){
    this.name=name;
    this.food=food;
    this.getName=function(){
        return this.name;
    }
}
Animal.prototype.food='meat';

Animal.prototype.eat=function(){
    console.log('I am eating '+this.food);
}
var tiger=new Animal('tiger');
var bird=new Animal('bird','rice');

