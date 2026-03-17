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

