/////// Annotations \\\\\\\
// let myVar : type = value

let myName : string = "Harsha";
myName = "Harsha Vardhanan";
console.log(myName); // Harsha Vardhanan

// myName = 12; ERROR

let myAge : number = 13;
myAge = 18;
console.log(myAge); // 18

// myAge = "13"; ERROR

let isStudent : Boolean = true;
isStudent = false;
console.log(isStudent); // false

// isStudent = 1; ERROR


/////// Type Inference \\\\\\\
// Tries to automatically determine the type of variable based on it's values
let tech = "TypeScript";
let version = 3.7;
let isLatest = true;

console.log(tech, version, isLatest); // TypeScript 3.7 true
console.log(typeof tech, typeof version, typeof isLatest); // string number boolean

// Error
// tech = 3.7;
// version = "TypeScript";
// isLatest = "Nope";


/////// Any Type \\\\\\\
// Any type can be assigned to any variable and all type checking is turned off
let color : any = "Blue";
color = 12;
color = true; 
console.log(color); // true


/////// Function Parameters and Annotations \\\\\\\
// Function Parameters and return types can also have type annotations
function greet(name : string) : void {
    console.log(`Hello ${name}`);
};

const square = (num : number) : number =>  num * num;

console.log(greet("Harsha")); // Hello Harsha
console.log(square(25)); // 625

// Default Value for Parameters can also be assigned
function greet1(name : string = "Stranger") : void {
    console.log(`Hello ${name}`);
};

console.log(greet1());


/////// Never Keyword \\\\\\\
// Indicates that a function will not return anything (Not even empty return)
// Indicates that a variable can never have a value
// Useful for indicating certain codepaths that should not be reached or certain values are impossible

// Some Use Cases:

// A function that always throws an Error
function throwError(msg: string): never {
    throw new Error(msg);
};

// A function that has an infinite loop
function infiniteLoop() : never {
    while(true) {}
};

// A variable that can never have a value
let x: never;
// x = infiniteLoop();


////// Arrays Types \\\\\\
// Arrays are typed in TS. Specify the type of values that an array can hold.
// Use either Array[type] or generic Array<type> syntax to specify the type of values in an array
const numbers : number[] = [1, 2, 3, 4, 5];
const names : Array<string> = ["Harsha", "Vardhanan", "Sri"];

console.log(numbers, names); // [ 1, 2, 3, 4, 5 ] [ 'Harsha', 'Vardhanan', 'Sri' ]
names.push("Izaki");
console.log(names); // [ 'Harsha', 'Vardhanan', 'Sri', 'Izaki' ]
// names.push(10); ERROR

const twoDimArr: number[][] = [[1, 2], [3, 4], [5, 6]];
const threeDimArr: number[][][] = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

console.log(twoDimArr); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(threeDimArr); // [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ]


////// Objects \\\\\\
// Structured data type that can hold multiple values as key-value pairs
// type varName (annotations/types) : { property: value }
const person: {firstName: string, lastName: string, age: number} = {
    firstName: "Harsha",
    lastName: "Vardhanan",
    age: 18
};

// Objects as function return value
function printUser(): {name: string, age: number, location: string} {
    return {
        name: "Harsha",
        age: 18,
        location: "Chennai"
    }
};


////// Type Aliases \\\\\\
// To create a new name for an existing type
// Define custom type that refers to another type and give it a more meaningful name
// Defined using the "type" keyword
type Person = {
    name: string,
    age: number
};

function printPerson(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
};

const person1: Person = {
    name: "Smith",
    age: 20
};
printPerson(person1);


////// Optional Properties \\\\\\
// Certain properties can be made optional in object type
// TO make a property optional add a question mark (?) after the property name
type User = {
    name: string,
    age: number,
    email?: string,
    phone?: string
};

const user1 : User = { name: "Alan", age: 18 };
const user2 : User = { name: "Antony", age: 19, email:"antony@email.com" };


////// readonly property \\\\\\
// Value of the property cannot be changed after declaration
type Subscriber = {
    name: string,
    age: number,
    readonly location: string
};

const sub1 : Subscriber = {
    name: "Person1",
    age: 25,
    location: "IN"
};

// sub1.location = "NY"; ERROR


////// Intersection Types \\\\\\
// Combine multiple types into a single type that includes all the properties and methods of constituent type
// Denoted by the & symbol
type AccountDetails = {
    email: string,
    password: string
};

type Client = User & AccountDetails;

const client1 : Client = {
    name: "Harsha",
    age: 18,
    email: "mail@hvardhanan.tech",
    password: "1234567890"
};

console.log(client1);


////// Unions \\\\\\
// Allows a variable or parameter to accept multiple types
// Defined using the pipe symbol (|)
let myVar: number | string;

const foo = (params: string | string[]) => {};

interface MyInterface { myProps: string | string[] };

const myItems: (number | string)[] = [1, 2, 'Three'];


////// Literal types \\\\\\
// A variable can only have one specific value and no other
let myColor: "red" | "blue" | "orange" | "purple";
myColor = "purple";
// myColor = "yellow"; ERROR

let isTrue: true;
isTrue = true;
// isTrue = false; ERROR

let myNum: 1 | 10 | 100;
myNum = 1;
// myNum = 2; ERROR


////// Tuples \\\\\\
// Represents an array with fixed number of elements
// Each element can have a different type
// Order of types in the tuple definition corresponds to the order of the values in the actual array.
let myTuple: [string, number] = ["hello", 105];
console.log(myTuple[0], myTuple[1]); // hello 105

// Destructuring tuples
let [firstElement, secondElement] = myTuple;
console.log(firstElement, secondElement) // hello 105


////// Enums \\\\\\
// Set of named constants
enum weatherConditions { Sunny = "sunny", Cloudy = "cloudy", Rainy = "rainy", Snowy = "snowy" };

const currentWeather = weatherConditions.Cloudy;
console.log(`The current weather condition is ${currentWeather}`); // The current weather condition is cloudy