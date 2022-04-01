"use strict";
// Basic types
let id = 5;
let company = "Pate's Programming";
let isPublished = true;
let x = 'Hello';
let age;
console.log('ID: ', id);
x = true;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// ! Won't work as ids[] is set to contain numbers
// ids.push('Hello')
// ids.push(true)
// Tuple // ! Must be ordered as specified
let person = [1, 'Wade', true];
//Tuple Array
let employee;
employee = [
    [1, 'Wade'],
    [1, 'Cody'],
    [1, 'Bo']
];
// Union
let pId;
pId = '31';
pId = 31;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Wade'
};
// Type Assertion
// ! Either way works for Assertion
let cId = 1;
//// let customerId = <number>cId
//// let customerId = cId as number
// Fuctions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(11, 2))
function log(message) {
    console.log(message);
}
log(13);
const user1 = {
    id: 1,
    name: 'Wade'
};
const p1 = 1;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    // Add other methods within the class
    register() {
        // return 1
        // !^ will not work as the Interface implemented expects a string
        return `${this.name} is now registered`;
    }
}
const wade = new Person(1, 'Wade', 30);
const sammie = new Person(2, 'Sammie', 29);
console.log(wade, sammie);
// ! Access Modifiers/ Data Modifiers: public (which is default), private, protected
// id will be public by default in the above class meaning we can access or change the value:
wade.id = 5;
console.log(wade, sammie);
// Adding private name as above, makes it so the values are only accessible within the class
// Adding protected age as above, makes it so the values are only accessible within the class AND extended classes
// Sub Classes
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const emp = new Employee(3, 'Josh', 35, 'Developer');
console.log(emp);
// Generics
// Basically used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['Wade', 'Sammie', 'Em', 'Ar']);
// numArray.push('hi')
numArray.push(100);
console.log(numArray);
// stringArray.push(5)
stringArray.push('Hello');
console.log(stringArray);
