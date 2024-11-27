/////// Annotations \\\\\\\

// let myVar : type = value

let myName : String = "Harsha";
myName = "Harsha Vardhanan";
console.log(myName) // Harsha Vardhanan

// myName = 12; ERROR

let myAge : Number = 13;
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

