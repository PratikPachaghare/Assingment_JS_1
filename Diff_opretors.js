/* 
In JavaScript, operators are symbols that perform operations on operands. They can be categorized based on their functionality. Here are some common categories of operators in JavaScript along with examples:
*/

// Arithmetic Operators:

// Perform mathematical operations.

let a = 5;
let b = 2;

let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus



//Comparison Operators:

//Compare two values and return a Boolean result.

let x = 10;
let y = 5;

console.log(x > y);  // Greater than
console.log(x < y);  // Less than
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to
console.log(x === y); // Equal to (strict equality)
console.log(x !== y); // Not equal to (strict inequality)


//Logical Operators:

//Perform logical operations and return a Boolean result.

let p = true;
let q = false;

console.log(p && q); // Logical AND
console.log(p || q); // Logical OR
console.log(!p);     // Logical NOT


//Assignment Operators:

//Assign values to variables.

let z = 10;
z += 5; // Equivalent to a = a + 5;


//Unary Operators:

//Operate on a single operand.

let num = 5;

console.log(-num); // Unary negation
console.log(++num); // Pre-increment
console.log(num++); // Post-increment


//Conditional (Ternary) Operator:

//A shorthand for an if-else statement.

let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor';



//Bitwise Operators:

//Perform operations at the binary level.

//let a = 5; // Binary representation: 0101   both are alredy declered 
//let b = 3; // Binary representation: 0011

console.log(a & b);  // Bitwise AND
console.log(a | b);  // Bitwise OR
console.log(a ^ b);  // Bitwise XOR
console.log(~a);     // Bitwise NOT



