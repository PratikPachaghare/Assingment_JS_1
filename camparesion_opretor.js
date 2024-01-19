/*
Unary operators work with one operand, like unary negation -x or unary plus +x.
Binary operators work with two operands, performing operations such as addition a + b or multiplication a * b.
The ternary operator is the only JavaScript operator that takes three operands. It provides a compact way to express a conditional statement with the syntax condition ? expr1 : expr2.

*/

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

let a = 5; // Binary representation: 0101  
let b = 3; // Binary representation: 0011

console.log(a & b);  // Bitwise AND
console.log(a | b);  // Bitwise OR
console.log(a ^ b);  // Bitwise XOR
console.log(~a);     // Bitwise NOT