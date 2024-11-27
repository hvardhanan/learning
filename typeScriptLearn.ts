/////// Annotations \\\\\\\
// let myVar : type = value

let myName : string = "Harsha";
myName = "Harsha Vardhanan";
console.log(myName) // Harsha Vardhanan

// myName = 12; ERROR

let myAge : number = 13;
myAge = 18;
console.log(myAge) // 18

// myAge = "13"; ERROR

let isStudent : Boolean = true;
isStudent = false;
console.log(isStudent) // false

// isStudent = 1; ERROR


/////// Type Inference \\\\\\\
// Tries to automatically determine the type of variable based on it's values
let tech = "TypeScript";
let version = 3.7;
let isLatest = true;

console.log(tech, version, isLatest) // TypeScript 3.7 true
console.log(typeof tech, typeof version, typeof isLatest) // string number boolean

// Error
// tech = 3.7;
// version = "TypeScript";
// isLatest = "Nope";

/////// Any Type \\\\\\\
// Any type can be assigned to any variable and all type checking is turned off
let color : any = "Blue";
color = 12;
color = true; 
console.log(color) // true

/////// Function Parameters and Annotations \\\\\\\
// Function Parameters and return types can also have type annotations
function greet(name : string) : void {
    console.log(`Hello ${name}`);
}

const square = (num : number) : number =>  num * num;

console.log(greet("Harsha")); // Hello Harsha
console.log(square(25)); // 625

// Default Value for Parameters can also be assigned
function greet1(name : string = "Stranger") : void {
    console.log(`Hello ${name}`);
}

console.log(greet1());

/////// Never Keyword \\\\\\\
// Indicates that a function will not return anything (Not even empty return)
// Indicates that a variable can never have a value
// Useful for indicating certain codepaths that should not be reached or certain values are impossible

// Some Use Cases:

// A function that always throws an Error
function throwError(msg: string): never {
    throw new Error(msg);
}

// A function that has an infinite loop
function infiniteLoop() : never {
    while(true) {}
}

// A variable that can never have a value
let x: never;
// x = infiniteLoop();

