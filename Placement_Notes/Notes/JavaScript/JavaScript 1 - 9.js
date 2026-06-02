// ----------Javascript Notes------------

// What is JavaScript?
// JavaScript is a programming language that is commonly used to create interactive effects within web browsers. It allows developers to add dynamic content, control multimedia, animate images, and much more on websites. JavaScript is an essential part of web development and is supported by all modern web browsers. It can be used for both client-side and server-side development, making it a versatile language for building web applications.

// High-level language?
// A high-level programming language is a type of programming language that abstracts away the details of the computer's hardware and provides a more human-readable syntax. High-level languages are designed to be easier to read, write, and maintain compared to low-level languages, which are closer to machine code. Examples of high-level programming languages include Python, Java, C++, and JavaScript. These languages allow developers to focus on solving problems and implementing functionality rather than dealing with the complexities of memory management and hardware interactions.

// Interpreted/JIT compiled
// JavaScript is an interpreted language, which means that the code is executed line by line by an interpreter. However, modern JavaScript engines use Just-In-Time (JIT) compilation to improve performance.

// Dynamically typed
// JavaScript is a dynamically typed language, which means that variables do not have a fixed type and can hold values of any type.

// Single-threaded
// JavaScript is a single-threaded language, which means that it can only execute one task at a time. However, it supports asynchronous programming to handle multiple tasks concurrently.

// Execution => `.js` file → JavaScript Engine → Parsing → Compilation → Execution and JavaScript Engines explaination
// When a `.js` file is loaded in a web browser, the JavaScript engine (such as V8 in Chrome or SpiderMonkey in Firefox) takes the following steps to execute the code:
// 1. Parsing: The engine reads the JavaScript code and converts it into an Abstract Syntax Tree (AST), which is a structured representation of the code.
// 2. Compilation: The engine compiles the AST into bytecode, which is a lower-level representation of the code that can be executed more efficiently.
// 3. Execution: The engine executes the bytecode, running the JavaScript code and producing the desired output or behavior on the web page.

// JavaScript Engines =>  V8, SpiderMonkey, JavaScriptCore 
// JavaScript engines are the programs that execute JavaScript code. Some of the most popular JavaScript engines include:
// 1. V8: Developed by Google, V8 is the JavaScript engine used in the Chrome browser and Node.js. It is known for its high performance and efficient memory management.
// 2. SpiderMonkey: Developed by Mozilla, SpiderMonkey is the JavaScript engine used in the Firefox browser. It was the first JavaScript engine ever created and has been continuously improved over the years.
// 3. JavaScriptCore: Also known as Nitro, JavaScriptCore is the JavaScript engine used in Apple's Safari browser. It is designed for high performance and supports modern JavaScript features.

// JavaScript Engine → Internal Working
//Engine → Parser → AST (Abstract Syntax Tree) → Interpreter → JIT Compiler → Garbage Collector
// The internal working of a JavaScript engine can be broken down into the following steps:
// 1. Parser: The engine reads the JavaScript code and converts it into an Abstract Syntax Tree (AST), which is a structured representation of the code.
// 2. Interpreter: The engine executes the AST directly, interpreting the code line by line.
// 3. JIT Compiler: The engine identifies frequently executed code and compiles it into machine code for faster execution.
// 4. Garbage Collector: The engine automatically manages memory by identifying and freeing up memory that is no longer in use, preventing memory leaks and optimizing performance.

// Execution Context => Global context, Function context, Eval context
// An execution context is an abstract concept that holds information about the environment in which the current code is being executed. There are three types of execution contexts in JavaScript:
// 1. Global Context: This is the default execution context that is created when a JavaScript program starts. It represents the global scope and contains all global variables and functions.
// 2. Function Context: A new execution context is created whenever a function is called. This context contains information about the function's parameters, local variables, and the value of `this`.
// 3. Eval Context: This context is created when code is executed using the `eval()` function. It allows for dynamic code execution but should be used with caution due to security risks.

// Memory : Stack, Heap
// In JavaScript, memory is managed in two main areas: the stack and the heap.
// Stack : Primitive values, Function calls
// The stack is a region of memory that stores primitive values (such as numbers, strings, booleans) and function calls. It operates in a last-in-first-out (LIFO) manner, meaning that the most recently added item is the first one to be removed. The stack is used for managing function execution and local variables.

// Heap :Objects, Arrays, Functions
// The heap is a region of memory that stores objects, arrays, and functions. It is used for dynamic memory allocation, allowing for the creation of complex data structures. The heap does not have a specific order for storing data, and it can grow and shrink as needed during the execution of a program.

// Garbage Collection : Mark and sweep
// Garbage collection is the process of automatically freeing up memory that is no longer in use by the program. The "mark and sweep" algorithm is a common method used for garbage collection in JavaScript. It works as follows:
// 1. Mark Phase: The garbage collector starts from the root objects (such as global variables) and marks all reachable objects in the heap as "in use".
// 2. Sweep Phase: The garbage collector then goes through the heap and frees up memory for any objects that were not marked as "in use," effectively removing them from memory and preventing memory leaks.

// Data Types: Primitive, Non-Primitive
// In JavaScript, there are two main categories of data types: primitive and non-primitive (reference) data types.
// Primitive: Number, String,Boolean, Undefined, Null, Symbol, BigInt
// Primitive data types are immutable and are stored directly in the variable. They include:
// 1. Number: Represents numeric values (e.g., 25, 99.99).
// 2. String: Represents sequences of characters (e.g., "Raj", 'Chennai').
// 3. Boolean: Represents logical values (true or false).
// 4. Undefined: Represents a variable that has been declared but not assigned a value.
// 5. Null: Represents the intentional absence of any object value.
// 6. Symbol: Represents a unique identifier, often used for object property keys.
// 7. BigInt: Represents integers that can be arbitrarily large.
// example
let num = 10; // Number
let str = "Hello"; // String
let isTrue = true; // Boolean
let empty = undefined; // Undefined
let nothing = null; // Null
let sym = Symbol("key"); // Symbol
let big = 123n; // BigInt

// Non-Primitive: Object, Array, Function
// Non-primitive data types are mutable and are stored as references to memory locations. They include:
// 1. Object: Represents a collection of key-value pairs.
// 2. Array: Represents an ordered collection of values.
// 3. Function: Represents a block of code that can be executed multiple times.

// example
let obj = { name: "Raj", age: 25 }; // Object
let arr = [1, 2, 3]; // Array
let func = function() { console.log("Hello"); }; // Function

//Variable Declaration: var, let, const 
// 1. var: Function-scoped, can be redeclared and updated, hoisted with undefined
// 2. let: Block-scoped, cannot be redeclared but can be updated, hoisted but not initialized (TDZ)
// 3. const: Block-scoped, cannot be redeclared or updated, hoisted but not initialized (TDZ)
// example
var x = 10;
let y = 20;
const z = 30;

// Scope: Global, Function, Block
// 1. Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// 2. Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.
// 3. Block Scope: Variables declared with let or const within a block (e.g., inside an if statement or loop) are in the block scope and can only be accessed within that block.

// Hoisting
// 1. Variable Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// 2. Function Hoisting: Functions declared with function are hoisted to the top of their scope and can be called before they are defined.
// simple example of hoisting full code
console.log(a); // undefined (due to var hoisting)
var a = 10;
console.log(b); // ReferenceError: Cannot access 'b' before initialization (due to let hoisting)
let b = 20;
greet(); // "Hello" (due to function hoisting)
function greet() {
    console.log("Hello");
}

// Temporal Dead Zone (TDZ): let/const behavior
// The Temporal Dead Zone is the period between the creation of a let or const variable and its initialization. During this time, the variable is not accessible and will throw a ReferenceError if accessed.
// example
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;

//Operators: Arithmetic, Comparison, Logical, Assignment, Ternary, Bitwise
// 1. Arithmetic Operators: +, -, *, /, %, ++, --
// 2. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// 3. Logical Operators: &&, ||, !
// 4. Assignment Operators: =, +=, -=, *=, /=
// 5. Ternary Operator: condition ? expression1 : expression2
// 6. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
// example
let a = 10;
let b = 5;
let sum = a + b; // 15
let isEqual = (a == b); // false
let isStrictEqual = (a === b); // false
let isGreater = (a > b); // true
let isTrue = (a > b) && (b > 0); // true
let isFalse = (a < b) || (b < 0); // false
let x = 10;
x += 5; // x is now 15
let result = (a > b) ? "a is greater" : "b is greater"; // "a is greater"
let bitwiseAnd = a & b; // 0 (bitwise AND of 10 and 5)

// Comparison : → `==` vs `===`, Truthy/Falsy values, Short-circuit evaluation
// 1. `==` vs `===`: The `==` operator performs type coercion and checks for value equality, while the `===` operator checks for both value and type equality without coercion.
// 2. Truthy/Falsy values: In JavaScript, certain values are considered "truthy" (evaluating to true in a boolean context) and others are "falsy" (evaluating to false). Falsy values include false, 0, "", null, undefined, and NaN. All other values are considered truthy.
// 3. Short-circuit evaluation: Logical operators (&& and ||) use short-circuit evaluation, meaning that they only evaluate the second operand if necessary. For example, in the expression `a && b`, if `a` is falsy, `b` will not be evaluated because the overall expression cannot be true. Similarly, in the expression `a || b`, if `a` is truthy, `b` will not be evaluated because the overall expression is already true.

// Conditional: if, else, switch
// 1. if: Executes a block of code if a specified condition is true.
// 2. else: Executes a block of code if the condition in the if statement is false.
// 3. switch: Evaluates an expression and executes code based on matching cases.
// example for if, else
let day = "Monday";
if (day === "Monday") {
    console.log("Start of the week");
} else if (day === "Friday") {
    console.log("End of the week");
} else {
    console.log("Midweek");
}
// example for switch
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Midweek");
}

// Loops
// 1. for: Executes a block of code a specified number of times.
// 2. while: Executes a block of code as long as a specified condition is true.
// 3. do-while: Executes a block of code at least once, then continues to execute the block as long as a specified condition is true.
// 4. for...of: Iterates over the values of an iterable object.
// 5. for...in: Iterates over the keys of an object.
// example for for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
} 
// example for while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
// example for do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// example for for...of loop
let arr = ["a", "b", "c"];
for (const element of arr) {
    console.log(element);
} 
// example for for...in loop
let obj = { name: "Raj", age: 25 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Loop control
// 1. break: Exits the loop immediately.
// 2. continue: Skips the current iteration and continues with the next iteration.
// example for break
for (let i = 0; i < 5; i++) {
    if (i === 3) { 
        break; // Exit the loop when i is 3
    } 
    console.log(i);
}
// example for continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // Skip the iteration when i is 3
    }
    console.log(i);
}

// Function: Declaration, Expression, Arrow function
// 1. Function Declaration: A named function that is defined using the `function` keyword and can be called before it is defined due to hoisting. 
// 2. Function Expression: A function that is assigned to a variable and cannot be called before it is defined due to hoisting.
// 3. Arrow Function: A concise syntax for writing functions using the `=>` syntax, which does not have its own `this` context and cannot be used as a constructor.
// example for function declaration 
function greet() {
    console.log("Hello");
}
// example for function expression
const greet = function() {
    console.log("Hello");
};
// example for arrow function
const greet = () => {
    console.log("Hello");
};

// Function behavior: First-class object, Higher-order function
// 1. First-class object: Functions in JavaScript are first-class objects, meaning they can be treated like any other value. They can be assigned to variables, passed as arguments to other functions, and returned from functions.
// 2. Higher-order function: A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Higher-order functions are commonly used for functional programming techniques, such as map, filter, and reduce.
// example for first-class object 
function greet() {
    console.log("Hello");
}
const sayHello = greet; // Assigning the function to a variable
sayHello(); // Calling the function through the variable
// example for higher-order function
function higherOrderFunction(func) {
    func();
}
higherOrderFunction(greet); // Calling the higher-order function with greet as an argument


// Arguments ,Rest parameter, Default parameter
// 1. Arguments: The `arguments` object is an array-like object available within all non-arrow functions that contains the values of the arguments passed to the function.
// 2. Rest parameter: The rest parameter syntax (`...args`) allows a function to accept an indefinite number of arguments as an array.
// 3. Default parameter: Default parameters allow you to specify default values for function parameters, which are used if no value is provided when the function is called.
// example for arguments
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
// example for rest parameter
function sum(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}
// example for default parameter
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

// `this` keyword, Depends on call-site
// The value of the `this` keyword in JavaScript depends on the call-site, which is the context in which a function is called. The value of `this` can vary based on how a function is invoked:
// 1. In a regular function, `this` refers to the global object (window in browsers) when called in the global scope, or to the object that owns the method when called as a method.
// 2. In an arrow function, `this` is lexically bound to the context in which the arrow function is defined, meaning it does not have its own `this` and inherits it from the surrounding scope.
// 3. In a constructor function, `this` refers to the newly created object when the function is called with the `new` keyword.
// example for `this` in a regular function
function regularFunction() {
    console.log(this); // In global scope, this will refer to the global object (window in browsers)
}
// example for `this` in an arrow function
const arrowFunction = () => {
    console.log(this); // This will refer to the surrounding scope's `this`, which is the global object in this case
};
// example for `this` in a constructor function
function Person(name) {
    this.name = name; // `this` refers to the newly created object
}
const person1 = new Person("Raj");
console.log(person1.name); // Output: "Raj"

// Scope Chain : Lexical scoping
// Lexical scoping means that the scope of a variable is determined by its position in the source code. In JavaScript, functions create their own scope, and variables defined within a function are not accessible outside of that function. However, functions can access variables from their outer scope, creating a scope chain. This allows for nested functions to access variables from their parent functions, enabling powerful programming patterns such as closures.
// example for lexical scoping
function outerFunction() {
    let outerVariable = "I am from the outer function";
    function innerFunction() {
        console.log(outerVariable); // innerFunction can access outerVariable due to lexical scoping
    }
    innerFunction();
}

// Closure: Function remembers outer scope
//Use cases : Data hiding, Factory functions, Callbacks
// A closure is a function that retains access to its outer scope even after the outer function has finished executing. This means that the inner function can access and manipulate variables from the outer function, allowing for powerful programming patterns such as data hiding, factory functions, and callbacks.
// example for closure
function outerFunction() {  
    let count = 0; // This variable is part of the outer scope
    function innerFunction() { // This is the inner function, which forms a closure
        count++; // The inner function can access and modify the outer variable 'count'
        console.log(count); // Output the current value of count
    }
    return innerFunction;
}
const counter = outerFunction(); // counter is now a closure that retains access to the 'count' variable
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3 

