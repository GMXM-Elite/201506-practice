/**
 * Created by Elite on 2015/9/11.
 */
var Person=require('./2.person.js');
var person1=new Person('杨过');
var person2=new Person('郭芙');
console.log(person1.name)
console.log(person2.name)
person1.__proto__.name="侠侣"
console.log(person1.name)
console.log(person2.__proto__.name)
