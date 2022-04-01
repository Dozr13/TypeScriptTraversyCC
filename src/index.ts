// Basic types
let id: number = 5
let company: string = "Pate's Programming"
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

console.log('ID: ', id)
x = true
age = 30

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// ! Won't work as ids[] is set to contain numbers
// ids.push('Hello')
// ids.push(true)

// Tuple // ! Must be ordered as specified
let person: [number, string, boolean] = [1, 'Wade', true]
//Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Wade'],
  [1, 'Cody'],
  [1, 'Bo']
]

// Union
let pId: string | number
pId = '31'
pId = 31

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up)
console.log(Direction1.Left)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
// Unspecified
//// const user = {
////   id: 1,
////   name: 'Wade'
//// }

// Specified
//// const user: {
////   id: number,
////   name: string
//// } = {
////   id: 1,
////   name: 'Wade'
//// }

// For cleaner specified Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Wade'
}

// Type Assertion
// ! Either way works for Assertion
let cId: any = 1
//// let customerId = <number>cId
//// let customerId = cId as number

// Fuctions
function addNum(x: number, y: number): number {
  return x + y
}
// console.log(addNum(11, 2))

function log(message: string | number): void {
  console.log(message)
}
log(13)









// Interfaces
// ! Interfaces can have optional properties declared with the ?
// ! If readonly is set, the value cannot be changed
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Wade'
}

// user1.id = 5

// ! Interfaces Cannot be used with Primitives or with Unions
// interface Point = number | string
// const p1: Point = 1

type Point = number | string
const p1: Point = 1

// Interfaces with Functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y








// Classes
// Can also add Interface for Class
interface PersonInterface {
  id: number
  name: string
  age?: number
  register(): string
}

class Person implements PersonInterface {
  id: number
  // private name: string
  // protected age: number
  name: string
  age: number

  constructor(id: number, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }

  // Add other methods within the class
  register() {
    // return 1
    // !^ will not work as the Interface implemented expects a string
    return `${this.name} is now registered`
  }
}

const wade = new Person(1, 'Wade', 30)
const Sam = new Person(2, 'Sam', 29)
console.log(wade, Sam)

// ! Access Modifiers/ Data Modifiers: public (which is default), private, protected
// id will be public by default in the above class meaning we can access or change the value:
wade.id = 5
console.log(wade, Sam)
// Adding private name as above, makes it so the values are only accessible within the class
// Adding protected age as above, makes it so the values are only accessible within the class AND extended classes


// Sub Classes
class Employee extends Person {
  position: string

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age)
    this.position = position
  }
}

const emp = new Employee(3, 'Josh', 35, 'Developer')

console.log(emp)







// Generics
// Basically used to build reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['Wade', 'Sam', 'Em', 'Ri'])

// numArray.push('hi')
numArray.push(100)
console.log(numArray)

// stringArray.push(5)
stringArray.push('Hello')
console.log(stringArray)


