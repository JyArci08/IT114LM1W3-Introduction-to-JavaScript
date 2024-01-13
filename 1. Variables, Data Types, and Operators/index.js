/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
var x = 8;
console.log(x);

// TODO 1.2 Use the let keyword to define a variable.
let animals = ['Dogs','Cats','Birds'];
console.log(animals);

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const names = 'Mariel';
console.log(names);
// When i tried to reassign the value of the variable, it now errors.

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: In var, we can redeclared within the same scope. In let, we can reassign the value. In const, we can't reassign the value after declartion.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
var exOne = 5 - 2;
var exTwo = 5 + 2;
var exThree = 5 / 2;
var exFour = 5 * 2;
console.log(exOne);
console.log(exTwo);
console.log(exThree);
console.log(exFour);
// Checkpoint 1.2 What operators did you use?
// Answer: I used subtraction, addition, division, and multiplication.

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
let name1 = 'Jy';
let name2 = 'Riel';
console.log(name1 + name2);
name1 += "Arcillas";
name2 += "Banaag";
console.log(name1);
console.log(name2);
// Checkpoint 1.3 What operators did you use?
// Answer: addition

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
const E1 = true && true;
const E2 = true || false;
const E3 = !true;
console.log(E1, E2, E3);

// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND, OR, and NOT operators


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
console.log(5>2);
console.log(5<2);
// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: It evaluates to "true". It was said that in JavaScript, it tries to convert both operands to a common type before making 
// the comparison. The false was converted as number 0 and the other operand which is empty string was also converted into number 0.
// Thus it will now become 0 == 0, resulting to a "true".
[] == false;