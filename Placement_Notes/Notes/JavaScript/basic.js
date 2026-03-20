//print on javascript
console.log("amar");

// var, let, const
// redeclaration 
// reassignment
// block scope

// explian the var, let, const with example and issues with 
// possible redeclaration, reassignment and block scope
var a = 10;
console.log(a);
var a = 20;
console.log(a);
var a = 30;
console.log(a);

function test() {
    var a = 40;
    console.log(a);
} 
test();
console.log(a);

//----------------------

// explain the let with example and issues with possible redeclaration, reassignment and block scope
let b = 10;
console.log(b);
// let b = 20; // This will throw an error: Identifier 'b' has already been declared
b = 20; // This is allowed, reassignment is possible
console.log(b);

function testLet() {
    let b = 30;
    console.log(b);
} 
testLet();
console.log(b); // This will print 20, as the block scope of 'b' inside testLet does not affect the outer 'b'

//----------------------

// explain the const with example and issues with possible redeclaration, reassignment and block scope
const c = 10;
console.log(c);
// const c = 20; // This will throw an error: Identifier 'c' has already been declared
// c = 20; // This will throw an error: Assignment to constant variable
function testConst() {
    const c = 30;
    console.log(c);
}
testConst();
console.log(c); // This will print 10, as the block scope of 'c' inside testConst does not affect the outer 'c'

//----------------------

// explain the block scope with example
if (true) {
    var x = 10; // var is function-scoped, so it will be accessible outside the block
    let y = 20; // let is block-scoped, so it will not be accessible outside the block
    const z = 30; // const is block-scoped, so it will not be accessible outside the block
}
console.log(x); // This will print 10, as var is function-scoped
// console.log(y); // This will throw an error: y is not defined
// console.log(z); // This will throw an error: z is not defined

{
    var a = 10; // var is function-scoped, so it will be accessible outside the block
    let b = 20; // let is block-scoped, so it will not be accessible outside the block
    const c = 30; // const is block-scoped, so it will not be accessible outside the block
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a); // This will print 10, as var is function-scoped
// console.log(b); // This will throw an error: b is not defined, as let is block-scoped
// console.log(c); // This will throw an error: c is not defined, as const is block-scoped


// function scope vs block scope
function scopeTest() {
    var a = 10; // var is function-scoped, so it will be accessible throughout the function
    let b = 20; // let is block-scoped, so it will only be accessible within the block it is defined in
    const c = 30; // const is block-scoped, so it will only be accessible within the block it is defined in
    if (true) {
        var a = 40; // This will overwrite the previous 'a' variable, as var is function-scoped
        let b = 50; // This will create a new 'b' variable that is only accessible within this block
        const c = 60; // This will create a new 'c' variable that is only accessible within this block
        console.log(a); // This will print 40, as the 'a' variable is overwritten
        console.log(b); // This will print 50, as this 'b' variable is different from the outer 'b'
        console.log(c); // This will print 60, as this 'c' variable is different from the outer 'c'
    }
    console.log(a); // This will print 40, as the 'a' variable is overwritten
    console.log(b); // This will print 20, as the outer 'b' variable is still accessible
    console.log(c); // This will print 30, as the outer 'c' variable is still accessible
}   
scopeTest();


// In summary:
// - var allows redeclaration and reassignment, and is function-scoped.
// - let does not allow redeclaration but allows reassignment, and is block-scoped.
// - const does not allow redeclaration or reassignment, and is block-scoped.
{
  const d = 40; // const is block-scoped, so it will not be accessible outside the block
  console.log(d); // This will print 40
}
// console.log(d); // This will throw an error: d is not defined


// example for ==(loose equality) vs === (strict equality)
let num1 = 10;
let num2 = "10";
console.log(num1 == num2); // This will print true, as == performs type coercion
console.log(num1 === num2); // This will print false, as === does not perform type coercion and checks for both value and type
// another example
let bool1 = true;
let bool2 = 1;
console.log(bool1 == bool2); // This will print true, as == performs type coercion and converts true to 1
console.log(bool1 === bool2); // This will print false, as === does not perform type coercion and checks for both value and type   


// template literals
const name = "John";
const age = 30;
//console.log("My name is " + name + " and I am " + age + " years old.");

// using template literals and string interpolation
console.log(`My name is ${name} and I am ${age} years old.`); // This will print the same output as above, but with cleaner syntax and easier readability


// primitive data types in JavaScript types
// string, number, boolean, null, undefined, symbol, bigint
// example of primitive data types
let str = "Hello, World!"; // string
let num = 42; // number
let bool = true; // boolean
let nullValue = null; // null
let undefinedValue; // undefined
let symbolValue = Symbol("unique"); // symbol   
let bigIntValue = 9007199254740991n; // bigint

console.log(str);
console.log(num);
console.log(bool);
console.log(nullValue);
console.log(undefinedValue);
console.log(symbolValue);
console.log(bigIntValue);

// non-primitive data types in JavaScript
// object, array, function
// example of non-primitive data types
let obj = { name: "Alice", age: 25 }; // object 
let arr = [1, 2, 3, 4, 5]; // array
function greet() { // function
    console.log("Hello!");
}
console.log(obj);
console.log(arr);
greet();


// Stack memory and heap memory in JavaScript
// Stack memory is used for storing primitive data types and function calls, while heap memory is used for storing objects and arrays.
// When a function is called, a new stack frame is created for that function, and when the function returns, the stack frame is removed. 
// Objects and arrays are stored in heap memory, and variables that reference them store the memory address of the object or array in the stack. 
// When an object or array is no longer referenced, it becomes eligible for garbage collection, which frees up memory in the heap.


// operators in JavaScript
// arithmetic operators: +, -, *, /, %, ++, --
// assignment operators: =, +=, -=, *=, /=, %=
// comparison operators: ==, ===, !=, !==, >, <, >=, <=     
// logical operators: &&, ||, !
// conditional (ternary) operator: condition ? expressionIfTrue : expressionIfFalse
// bitwise operators: &, |, ^, ~, <<, >>, >>>

// example of operators in JavaScript
let a1 = 10;
let b1 = 5;
console.log(a1 + b1);   // This will print 15
console.log(a1 - b1);   // This will print 5
console.log(a1 * b1);   // This will print 50
console.log(a1 / b1);   // This will print 2
console.log(a1 % b1);   // This will print 0
a1++; // This will increment a1 by 1, so a1 will become 11
console.log(a1);
b1--; // This will decrement b1 by 1, so b1 will become 4
console.log(b1);

// assignment operators
a1 += 5; // This will add 5 to a1, so a1 will become 16
console.log(a1);
b1 *= 2; // This will multiply b1 by 2, so b1 will become 8
console.log(b1);

// comparison operators
console.log(a1 == b1); // This will print false, as 16 is not equal to 8
console.log(a1 === b1); // This will print false, as 16 is not equal to 8 and they are of the same type
console.log(a1 != b1); // This will print true, as 16 is not equal to 8
console.log(a1 !== b1); // This will print true, as 16 is not equal to 8 and they are of the same type
console.log(a1 > b1); // This will print true, as 16 is greater than 8
console.log(a1 < b1); // This will print false, as 16 is not less than 8
console.log(a1 >= b1); // This will print true, as 16 is greater than or equal to 8
console.log(a1 <= b1); // This will print false, as 16 is not less than or equal to 8
console.log(a1 > 15 && b1 < 10); // This will print true, as 16 is greater than 15 and 8 is less than 10
console.log(a1 > 15 || b1 < 5); // This will print true, as 16 is greater than 15, even though 8 is not less than 5
console.log(!(a1 > 15)); // This will print false, as a1 is greater than 15, so the condition inside the parentheses is true, and the ! operator negates it to false    

// conditional (ternary) operator
let age1 = 18;
let canVote = age1 >= 18 ? "Yes" : "No";    

console.log(canVote); // This will print "Yes", as age1 is greater than or equal to 18  
age1 = 17;
canVote = age1 >= 18 ? "Yes" : "No";    
console.log(canVote); // This will print "No", as age1 is less than 18

// bitwise operators
let x1 = 5; // In binary: 0101
let y1 = 3; // In binary: 0011
console.log(x1 & y1); // This will print 1, as 0101 & 0011 = 0001
console.log(x1 | y1); // This will print 7, as 0101 | 0011 = 0111
console.log(x1 ^ y1); // This will print 6, as 0101 ^ 0011 = 0110
console.log(~x1); // This will print -6, as ~0101 = 1010 (in two's complement, this represents -6)
console.log(x1 << 1); // This will print 10, as 0101 << 1 = 1010 (which is 10 in decimal)
console.log(x1 >> 1); // This will print 2, as 0101 >> 1 = 0010 (which is 2 in decimal)
// Note: Bitwise operators work on 32-bit integers, so the results may not be what you expect if you use them with larger numbers or non-integer values.
// >>> is the unsigned right shift operator, which shifts bits to the right and fills the leftmost bits with zeros. For example:
console.log(x1 >>> 1); // This will print 2, as 0101 >>> 1 = 0010 (which is 2 in decimal)

// logical operators
let a2 = true;
let b2 = false;
console.log(a2 && b2); // This will print false, as true && false is false
console.log(a2 || b2); // This will print true, as true || false is true
console.log(!a2); // This will print false, as !true is false
console.log(!b2); // This will print true, as !false is true    


// sync vs async in JavaScript
// JavaScript is a single-threaded language, which means it can only execute one task at a time. 
// Synchronous code is executed in a sequential manner, where each line of code waits for the previous line to finish before executing. 
// Asynchronous code, on the other hand, allows multiple tasks to be executed concurrently, without blocking the main thread. 
// Asynchronous operations are typically handled using callbacks, promises, or async/await syntax.
// example of synchronous code
console.log("Synchronous code start");  
console.log("Synchronous code end");

// example of asynchronous code using setTimeout    
console.log("Asynchronous code start");
setTimeout(() => {
    console.log("This will be printed after 10 seconds");
}, 10000);
console.log("Asynchronous code end");

// example of asynchronous code using promises  
console.log("Asynchronous code with promises start");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});
console.log("Asynchronous code with promises end");

// example of asynchronous code using async/await   
console.log("Asynchronous code with async/await start");
async function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async function resolved after 2 seconds");
        }, 2000);
    });
}
async function main() {
    const result = await asyncFunction();
    console.log(result);
}   
main();
console.log("Asynchronous code with async/await end");

// event loop in JavaScript
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser's APIs and then executing them when they are ready. 
// The event loop continuously checks the call stack and the task queue. If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution. 
// This allows JavaScript to handle asynchronous operations without blocking the main thread, ensuring a responsive user experience.

// ES5 vs ES6
// ES5 (ECMAScript 5) is the fifth edition of the ECMAScript standard, which was released in 2009. It introduced features like strict mode, JSON support, and new array methods.
// ES6 (ECMAScript 2015) is the sixth edition of the ECMAScript standard, which was released in 2015. It introduced many new features such as let and const for variable declarations, arrow functions, template literals, destructuring assignment, default parameters, rest and spread operators, classes, modules, promises, and more. 
// ES6 brought significant improvements to the JavaScript language, making it more powerful and easier to write cleaner code.


// function in JavaScript
// A function is a reusable block of code that performs a specific task. Functions can take parameters, perform operations, and return values. 
// Functions can be defined using function declarations, function expressions, or arrow functions.
// types of functions in JavaScript

// 1. Function declaration (ES5)
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // This will print 5

// 2. Function expression (ES5)
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 3)); // This will print 2

// 3. Arrow function (ES6)
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 5)); // This will print 20

// 4. Implicit return in arrow function (ES6)
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // This will print 5

// 5. Function with default parameters (ES6) 
function defaultParams(a, b=10) {
    return a + b;
}
console.log(defaultParams(5)); // This will print 15
console.log(defaultParams(5, 20)); // This will print 25

// callback function using to make a simple calculator(add, subtract, multiply, divide) using callback functions (Higher-order functions)
// Higher-order functions are functions that can take other functions as arguments or return functions as their result.
function calculator(a, b, operation) {
    return operation(a, b);
}   
function addOperation(a, b) {
    return a + b;
}   
function subtractOperation(a, b) {
    return a - b;
}
function multiplyOperation(a, b) {
    return a * b;
}
function divideOperation(a, b) {
    return a / b;
}   
console.log(calculator(10, 5, addOperation)); // This will print 15
console.log(calculator(10, 5, subtractOperation)); // This will print 5
console.log(calculator(10, 5, multiplyOperation)); // This will print 50
console.log(calculator(10, 5, divideOperation)); // This will print 2   


// type conversion in JavaScript
// Type conversion is the process of converting a value from one data type to another. 
// JavaScript provides several built-in functions for type conversion, such as String(), Number(), Boolean(), and more. 
// Type conversion can be implicit (performed automatically by JavaScript) or explicit (performed manually by the programmer).

// explicit type conversion
let n1 = 10;
let str1 = String(n1);
console.log(str1); // This will print "10"
let str2 = "20";
let n2 = Number(str2);
console.log(n2); // This will print 20

// type coercion (implicit type conversion)
let n3 = 10;
let str3 = "20";
console.log(10 + n3 + str3); // This will print "1020", as the number 10 is coerced to a string and concatenated with "20"
console.log("5" - 2); // This will print 3, as the string "5" is coerced to a number and subtracted by 2
console.log("5" * 2); // This will print 10, as the string "5" is coerced to a number and multiplied by 2
console.log("5" / 2);   // This will print 2.5, as the string "5" is coerced to a number and divided by 2
console.log("5" + 2); // This will print "52", as the number 2 is coerced to a string and concatenated with "5" 


// contionals in JavaScript
// Conditional statements are used to perform different actions based on different conditions. 
// JavaScript supports several types of conditional statements, including if...else, switch, and ternary operator.  
// The if...else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false.
// The switch statement is used to perform different actions based on different cases. 
// The ternary operator is a shorthand for the if...else statement, and it takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
// example of if...else statement
let ageVote = 18;
if (ageVote >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// example of switch statement  
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
} 

// grade example using switch statement
let mark = 85;
switch (true) {
    case mark >= 90:
        console.log("Grade A");
        break;
    case mark >= 80:
        console.log("Grade B");
        break;
    case mark >= 70:
        console.log("Grade C");
        break;
    case mark >= 60:
        console.log("Grade D");
        break;
    default:
        console.log("Grade F");
}

// example of ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log(discount); // This will print 0.1, as isMember is true, so the condition is true and the expression after the ? is executed. If isMember were false, it would print 0, as the expression after the : would be executed instead.

// control statements in JavaScript
// Control statements are used to control the flow of execution in a program. 
// JavaScript supports several types of control statements, including if...else, switch, for, while, do...while, break, continue, and more. 
// Control statements allow you to execute different blocks of code based on certain conditions or to repeat a block of code multiple times.
// example of for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // This will print numbers from 0 to 4
}

// example of while loop
let j = 0;  
while (j < 5) {
    console.log(j); // This will print numbers from 0 to 4
    j++;
}   

// example of do...while loop
let k = 0;  
do {
    console.log(k); // This will print numbers from 0 to 4
    k++;
} while (k < 5);

// example of break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // This will exit the loop when i is equal to 5
    }
    console.log(i); // This will print numbers from 0 to 4
}

// example of continue statement
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {  
        continue; // This will skip the rest of the loop body when i is even
    }
    console.log(i); // This will print odd numbers from 1 to 9
}

// example of nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {  
        console.log(`i: ${i}, j: ${j}`); // This will print the values of i and j for each iteration of the inner loop
    }
}   

// In summary, control statements are essential for managing the flow of execution in a JavaScript program, allowing you to make decisions and repeat actions based on specific conditions.

// program for vote age using if...else statement input from user
let ageInput = prompt("Please enter your age:");
ageInput = Number(ageInput); // Convert the input to a number
if (ageInput >= 18) {    
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// return statement in JavaScript
// The return statement is used to exit a function and return a value from that function. 
// When a return statement is executed, the function stops executing and the specified value is returned to the caller.
// example of return statement
function sum(a, b) {
    return a + b; // This will return the sum of a and b to the caller
}   
let result = sum(5, 10);
console.log(result); // This will print 15, as the sum function returns the value 15 to the caller, which is then stored in the variable result and printed to the console


// Array in JavaScript
// An array is a data structure that can hold a collection of values. 
// In JavaScript, arrays are dynamic and can hold values of different types.
// example of array
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1); // This will print [1, 2, 3, 4, 5]
let arr2 = ["Hello", 42, true, null];
console.log(arr2); // This will print ["Hello", 42, true, null]

// array methods in JavaScript
// push(), pop(), shift(), unshift(), indexOf(), includes(), slice(), splice(), forEach(), map(), filter(), reduce(), and more.
// example of array methods
let arr3 = [1, 2, 3];
arr3.push(4); // This will add 4 to the end of the array, so arr3 will become [1, 2, 3, 4]
console.log(arr3);
arr3.pop(); // This will remove the last element of the array, so arr3 will become [1, 2, 3]
console.log(arr3);
arr3.unshift(0); // This will add 0 to the beginning of the array, so arr3 will become [0, 1, 2, 3]
console.log(arr3);
arr3.shift(); // This will remove the first element of the array, so arr3 will become [1, 2, 3]
console.log(arr3);
console.log(arr3.indexOf(2)); // This will print 1, as the index of the element 2 in the array is 1
console.log(arr3.includes(3)); // This will print true, as the array includes the element 3
//----------------------------------------------------------------------------------
console.log(arr3.slice(1, 3)); // This will print [2, 3], as slice(1, 3) returns a new array containing the elements from index 1 to index 2 (not including index 3)

arr3.splice(1, 2); // This will remove 2 elements starting from index 1, so arr3 will become [1, 4]
console.log(arr3); // This will print [1, 4], as the elements at index 1 and 2 (which are 2 and 3) have been removed from the array

// forEach() example
// The forEach() method executes a provided function once for each array element.
arr3.forEach((element) => {
    console.log(element); // This will print each element of the array on a new line (1 and 4 in this case)
});

// map() example
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
let arr4 = [1, 2, 3, 4, 5];
let squaredArr = arr4.map((element) => element * element);  
console.log(squaredArr); // This will print [1, 4, 9, 16, 25], as map() creates a new array with the results of calling a provided function on every element in the calling array (in this case, it squares each element)   

// filter() example
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let arr5 = [1, 2, 3, 4, 5];
let evenNumbers = arr5.filter((element) => element % 2 === 0);  
console.log(evenNumbers); // This will print [2, 4], as filter() creates a new array with all elements that pass the test implemented by the provided function (in this case, it checks if the element is even)

// reduce() example
// The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
let arr6 = [1, 2, 3, 4];
let sumArr6 = arr6.reduce((sum, element) => sum + element, 0);  
console.log(sumArr6); // This will print 10, as reduce() executes the provided function for each value of the array (from left to right) and reduces it to a single value (the sum of all elements in this case)

// some and every() example
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.some((element) => element > 4)); // This will print true, as some() tests whether at least one element in the array is greater than 4 (in this case, 5 is greater than 4)
console.log(arr7.every((element) => element > 0)); // This will print true, as every() tests whether all elements in the array are greater than 0 (in this case, all elements are greater than 0)

// In summary, arrays are a fundamental data structure in JavaScript that allow you to store and manipulate collections of values.


// Math in JavaScript
// JavaScript provides a built-in Math object that has properties and methods for mathematical constants and functions. 
// Some commonly used Math methods include Math.round(), Math.floor(), Math.ceil(), Math.random(), Math.max(), Math.min(), and more.
// example of Math methods
console.log(Math.round(4.49)); // This will print 4, as Math.round() rounds a number to the nearest integer
console.log(Math.floor(4.7)); // This will print 4, as Math.floor() rounds a number down to the nearest integer
console.log(Math.ceil(4.2)); // This will print 5, as Math.ceil() rounds a number up to the nearest integer
console.log(Math.random()); // This will print a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.max(1, 5, 3)); // This will print 5, as Math.max() returns the largest of the given numbers
console.log(Math.min(1, 5, 3)); // This will print 1, as Math.min() returns the smallest of the given numbers   
// Abs() method returns the absolute value of a number
console.log(Math.abs(-5)); // This will print 5, as Math.abs() returns the absolute value of a number (the distance of the number from zero on the number line)
// pow() method returns the base to the exponent power, that is, base^exponent
console.log(Math.pow(2, 3)); // This will print 8, as Math.pow() returns the base (2) raised to the exponent (3), which is 2^3 = 8
// sqrt() method returns the square root of a number
console.log(Math.sqrt(16)); // This will print 4, as Math.sqrt() returns the square root of a number (the value that, when multiplied by itself, gives the original number, in this case, 4 * 4 = 16)
// In summary, the Math object in JavaScript provides a variety of methods for performing mathematical operations and working with numbers.


// hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. 
// This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
// example of hoisting with variables
console.log(hoistedVar); // This will print undefined, as the declaration of hoistedVar is hoisted to the top, but its initialization is not
var hoistedVar = "I am hoisted!"; // The declaration of hoistedVar is hoisted, but the assignment happens at this line

// example of hoisting with functions
hoistedFunction(); // This will print "I am a hoisted function!", as the entire function declaration is hoisted to the top
function hoistedFunction() {
    console.log("I am a hoisted function!");
}

// example of hoisting with let and const
console.log(hoistedLet); // This will throw a ReferenceError, as let and const declarations are not hoisted in the same way as var
let hoistedLet = "I am not hoisted!"; // The declaration of hoistedLet is not hoisted, so it cannot be accessed before this line
console.log(hoistedConst); // This will throw a ReferenceError, as const declarations are not hoisted in the same way as var
const hoistedConst = "I am not hoisted!"; // The declaration of hoistedConst is not hoisted, so it cannot be accessed before this line

// In summary, hoisting allows you to use variables and functions before they are declared in the code, but it can lead to unexpected behavior if not understood properly. It's generally recommended to declare variables and functions at the top of their scope to avoid confusion.

// spread operator in javascript
// The spread operator (...) is a syntax in JavaScript that allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected.
// example of spread operator with arrays
let arr8 = [1, 2, 3];
let arr9 = [...arr8, 4, 5]; // This will create a new array that includes all elements of arr8 followed by 4 and 5
console.log(arr9); // This will print [1, 2, 3, 4, 5]
// example of spread operator with strings
let str4 = "Hello";
let str5 = [...str4, " ", "World!"].join(""); // This will create a new string by spreading the characters of str4 and adding a space and "World!" before joining them back into a string
console.log(str5); // This will print "Hello World!"
// example of spread operator with objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // This will create a new object that includes all properties of obj1 followed by a new property c with value 3
console.log(obj2); // This will print { a: 1, b: 2, c: 3 }
// In summary, the spread operator is a powerful syntax in JavaScript that allows you to easily expand iterables and objects, making it easier to work with arrays, strings, and objects in a more concise and readable way.


// object in JavaScript
// An object is a collection of properties, where each property is a key-value pair. 
// In JavaScript, objects are dynamic and can hold values of different types, including other objects and functions.
// example of object
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log(person); // This will print the person object with its properties and methods
person.greet(); // This will call the greet method of the person object, which will print "Hello, my name is Alice and I am 25 years old."

// object inside array example
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log(people); // This will print an array of objects, each representing a person with their name and age     
// In summary, objects are a fundamental data structure in JavaScript that allow you to store and manipulate collections of key-value pairs, making it easier to represent complex data and behavior in your programs.

// object methods in JavaScript
// Object.keys(), Object.values(), Object.entries(), Object.assign(), and more.
// example of object methods
let obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj3)); // This will print ["a", "b", "c"], as Object.keys() returns an array of a given object's own enumerable property names
console.log(Object.values(obj3)); // This will print [1, 2, 3], as Object.values() returns an array of a given object's own enumerable property values
console.log(Object.entries(obj3)); // This will print [["a", 1], ["b", 2], ["c", 3]], as Object.entries() returns an array of a given object's own enumerable property [key, value] pairs
let obj4 = { d: 4, e: 5 };
let mergedObj = Object.assign({}, obj3, obj4);
console.log(mergedObj); // This will print { a: 1, b: 2, c: 3, d: 4, e: 5 }, as Object.assign() copies all enumerable own properties from one or more source objects to a target object and returns the target object (in this case, it merges obj3 and obj4 into a new object)
// In summary, object methods in JavaScript provide powerful tools for working with objects, allowing you to easily access and manipulate their properties and values.


// object to traverse in JavaScript
// To traverse an object in JavaScript, you can use a for...in loop, Object.keys(), Object.values(), or Object.entries() methods. 
// The for...in loop iterates over the enumerable properties of an object, while Object.keys(), Object.values(), and Object.entries() return arrays that can be iterated over using array methods like forEach() or map().
// example of traversing an object using for...in loop
let obj5 = { a: 1, b: 2, c: 3 };
for (let key in obj5) {
    if (obj5.hasOwnProperty(key)) { // This checks if the property is a direct property of the object, not inherited from the prototype chain
        console.log(`${key}: ${obj5[key]}`); // This will print each key and its corresponding value in the object
    }   
}
// example of traversing an object using Object.keys() and forEach()
Object.keys(obj5).forEach((key) => {
    console.log(`${key}: ${obj5[key]}`); // This will print each key and its corresponding value in the object
});
// example of traversing an object using Object.entries() and forEach()
Object.entries(obj5).forEach(([key, value]) => {
    console.log(`${key}: ${value}`); // This will print each key and its corresponding value in the object
});
// In summary, there are multiple ways to traverse an object in JavaScript, allowing you to access and manipulate its properties and values as needed.

// rest operator in JavaScript
// The rest operator (...) is a syntax in JavaScript that allows you to represent an indefinite number of arguments as an array. 
// It is typically used in function parameters to gather the remaining arguments into an array after the named parameters have been defined.    
// example of rest operator in function parameters
function sumAll(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0); // This will sum all the numbers in the array using the reduce() method
}
console.log(sumAll(1, 2, 3)); // This will print 6, as the rest operator gathers the arguments into an array [1, 2, 3] and then sums them
console.log(sumAll(4, 5, 6, 7)); // This will print 22, as the rest operator gathers the arguments into an array [4, 5, 6, 7] and then sums them
// example of rest operator with named parameters
function greet(greeting, ...names) {
    names.forEach((name) => {
        console.log(`${greeting}, ${name}!`); // This will print a greeting for each name in the names array
    });
}
greet("Hello", "Alice", "Bob", "Charlie"); // This will print "Hello, Alice!", "Hello, Bob!", and "Hello, Charlie!", as the rest operator gathers the names into an array ["Alice", "Bob", "Charlie"] and then iterates over them to print a greeting for each name
// In summary, the rest operator is a powerful syntax in JavaScript that allows you to easily handle an indefinite number of arguments in functions, making it easier to work with variable-length argument lists.


// shallow copy vs deep copy in JavaScript
// A shallow copy of an object is a copy that only copies the top-level properties of the object, while a deep copy creates a new object with all levels of nested objects copied as well. 
// In JavaScript, you can create a shallow copy of an object using Object.assign() or the spread operator, while a deep copy can be created using JSON.parse(JSON.stringify()) or a custom recursive function.
// example of shallow copy
let originalObj = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, originalObj);   
shallowCopy.a = 10; // This will change the value of a in the shallow copy, but not in the original object
shallowCopy.b.c = 20; // This will change the value of c in both the shallow copy and the original object, as they reference the same nested object
console.log(originalObj); // This will print { a: 1, b: { c: 20 } }, as the change to b.c affects both the original object and the shallow copy
console.log(shallowCopy); // This will print { a: 10, b: { c: 20 } }, as the change to a only affects the shallow copy, but the change to b.c affects both
// example of deep copy
let deepCopy = JSON.parse(JSON.stringify(originalObj)); // This will create a deep copy of the original object
deepCopy.a = 100; // This will change the value of a in the deep copy, but not in the original object
deepCopy.b.c = 200; // This will change the value of c in the deep copy, but not in the original object, as they are now separate objects
console.log(originalObj); // This will print { a: 1, b: { c: 20 } }, as the changes to the deep copy do not affect the original object
console.log(deepCopy); // This will print { a: 100, b: { c: 200 } }, as the changes to the deep copy do not affect the original object
// In summary, understanding the difference between shallow copy and deep copy is important when working with objects in JavaScript, as it can affect how changes to one object may impact another object that references the same data.


// DOM  in JavaScript
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content, structure, and style of web pages dynamically using JavaScript.
// accessing DOM elements modifying DOM elements, creating new elements, and handling events are common tasks when working with the DOM in JavaScript. 
// grtElementById(), getElementsByClassName(), querySelector(), querySelectorAll() are commonly used methods to access DOM elements, while innerHTML, textContent, style, and classList are used to modify DOM elements.
// example of accessing and modifying DOM elements
// Assuming we have the following HTML structure: 
// <div id="myDiv" class="myClass">Hello, World!</div> 

// Accessing the DOM element
let myDiv = document.getElementById("myDiv");
console.log(myDiv); // This will print the DOM element with id "myDiv"
console.log(myDiv.textContent); // This will print "Hello, World!", as textContent returns the text content of the element
// Modifying the DOM element
myDiv.textContent = "Hello, JavaScript!"; // This will change the text content of the div to "Hello, JavaScript!"
myDiv.style.color = "blue"; // This will change the text color of the div to blue
myDiv.classList.add("newClass"); // This will add a new class "newClass" to the div
console.log(myDiv); // This will print the modified DOM element with the new text content, style, and class
// In summary, the DOM allows you to interact with and manipulate web pages dynamically using JavaScript, enabling you to create interactive and responsive user experiences.

// getElementById() vs querySelector() in JavaScript
// getElementById() is a method that returns the element with the specified ID. It is faster than querySelector() when you know the ID of the element you want to access, as it directly accesses the element by its unique identifier.
// querySelector() is a more versatile method that allows you to select elements using CSS selectors. It can select elements by ID, class, tag name, and more complex selectors. However, it is generally slower than getElementById() when selecting by ID, as it has to parse the selector and search through the DOM to find the matching element.
// example of getElementById() vs querySelector()
// Assuming we have the following HTML structure:
// <div id="myDiv" class="myClass">Hello, World!</div>
// Using getElementById()
let elementById = document.getElementById("myDiv");
console.log(elementById); // This will print the DOM element with id "myDiv"
// Using querySelector()
let elementByQuerySelector = document.querySelector("#myDiv");
console.log(elementByQuerySelector); // This will also print the DOM element with id "myDiv", as querySelector() can select elements using CSS selectors (in this case, the selector "#myDiv" selects the element with id "myDiv")
// In summary, getElementById() is a faster method for selecting elements by their unique ID, while querySelector() offers more flexibility in selecting elements using various CSS selectors.

// getElementsByClassName() vs querySelectorAll() in JavaScript
// getElementsByClassName() is a method that returns a live HTMLCollection of all elements with the specified class name. It is faster than querySelectorAll() when you know the class name of the elements you want to access, as it directly accesses the elements by their class name.
// querySelectorAll() is a more versatile method that allows you to select elements using CSS selectors. It can select elements by class name, ID, tag name, and more complex selectors. However, it is generally slower than getElementsByClassName() when selecting by class name, as it
// has to parse the selector and search through the DOM to find the matching elements.
// example of getElementsByClassName() vs querySelectorAll()
// Assuming we have the following HTML structure:
// <div class="myClass">Element 1</div> 
// <div class="myClass">Element 2</div> 
// Using getElementsByClassName()
let elementsByClassName = document.getElementsByClassName("myClass");
console.log(elementsByClassName); // This will print an HTMLCollection of all elements with class "myClass"
// Using querySelectorAll()
let elementsByQuerySelectorAll = document.querySelectorAll(".myClass");
console.log(elementsByQuerySelectorAll); // This will also print a NodeList of all elements with class "myClass", as querySelectorAll() can select elements using CSS selectors (in this case, the selector ".myClass" selects all elements with class "myClass")
// In summary, getElementsByClassName() is a faster method for selecting elements by their class name, while querySelectorAll() offers more flexibility in selecting elements using various CSS selectors.


// OOPS in JavaScript
// Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code. 
// In JavaScript, you can create objects using object ES6 classes.

// ES6 classes
class PersonClass {
    constructor(name, age) {    
        this.name = name;
        this.age = age;
    }       
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person3 = new PersonClass("Charlie", 35);
person3.greet(); // This will call the greet method of person3, which will print "Hello, my name is Charlie and I am 35 years old."
// In summary, JavaScript supports multiple ways to implement object-oriented programming, allowing you to create and manage objects in a way that suits your coding style and needs.

//  overloading function in JavaScript
// Function overloading is a feature in some programming languages that allows you to define multiple functions with the same name but different parameters. 
// However, JavaScript does not support function overloading in the traditional sense. Instead, you can achieve similar functionality by using default parameters, rest parameters, or by checking the number and types of arguments within a single function definition.   
// example of simulating function overloading using default parameters
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating an asynchronous operation
    if (success) { 
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
myPromise.then((message) => {
    console.log(message); // This will print "Operation successful!" if the promise is resolved
}).catch((error) => {
    console.error(error); // This will print "Operation failed!" if the promise is rejected
});
greet("Alice"); // This will print "Hello, Alice!", as the default value for greeting is used
greet("Bob", "Hi"); // This will print "Hi, Bob!", as the provided value for greeting is used
// example of simulating function overloading using rest parameters
function sum(...numbers) {      
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2)); // This will print 3, as the rest parameter gathers the arguments into an array [1, 2] and then sums them
console.log(sum(1, 2, 3, 4)); // This will print 10, as the rest parameter gathers the arguments into an array [1, 2, 3, 4] and then sums them
// example of simulating function overloading by checking arguments
function display() {
    if (arguments.length === 1) {
        console.log(`Single argument: ${arguments[0]}`);
    } else if (arguments.length === 2) {
        console.log(`Two arguments: ${arguments[0]} and ${arguments[1]}`);
    } else {        console.log("No arguments or more than two arguments");
    }
}
display("Hello"); // This will print "Single argument: Hello", as there is one argument
display("Hello", "World"); // This will print "Two arguments: Hello and World", as there are two arguments
display(); // This will print "No arguments or more than two arguments", as there are no arguments
display("Hello", "World", "!"); // This will also print "No arguments or more than two arguments", as there are more than two arguments
// In summary, while JavaScript does not support traditional function overloading, you can use various techniques to achieve similar functionality based on the number and types of arguments passed to a function.     

// promises in JavaScript
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
// Promises provide a cleaner and more manageable way to handle asynchronous code compared to traditional callback functions.
// example of a promise

// In summary, promises in JavaScript provide a powerful way to handle asynchronous operations, allowing you to write cleaner and more maintainable code when dealing with tasks that may take time to complete, such as API calls, file reading, or timers.


// Inheritance in JavaScript
// Inheritance is a fundamental concept in object-oriented programming that allows a new class (called a subclass or child class) to inherit properties and methods from an existing class (called a superclass or parent class).
// In JavaScript, you can implement inheritance using ES6 classes. 

// example of inheritance using ES6 classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the parent class (Animal) to initialize the name property
        this.breed = breed; // Initialize the breed property specific to the Dog class
    }
    bark() {
        console.log(`${this.name} barks: Woof!`);
    }
}
let dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // This will call the speak method inherited from the Animal class, which will print "Buddy makes a sound."
dog1.bark(); // This will call the bark method of the Dog class, which will print "Buddy barks: Woof!"
// In summary, inheritance in JavaScript allows you to create new classes that can reuse and extend the functionality of existing classes, promoting code reusability and a hierarchical class structure.
