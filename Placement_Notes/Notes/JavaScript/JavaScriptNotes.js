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




