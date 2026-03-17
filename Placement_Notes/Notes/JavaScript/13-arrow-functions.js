// Arrow function = Short form of function expression
// The JavaScript arrow functions are introduced in ES6.

// Before ES6, we can define a JavaScript function with function declaration or function expression. The function expressions are used to define anonymous functions.

// Basic syntax:
// const variableName = (parameters) => expression;
// const variableName = (parameters) => { function body };

const add = (a, b) => { return a + b; };
console.log(add(1, 2)); // 3

// If the function body contains a single expression, you can also use the shorthand syntax, omitting the curly braces and the "return" keyword:
const add1 = (a, b) => a + b;
console.log(add1(1, 2)); // 3

let add5 = (a, b) => {
    let result = a + b;
    return result;
  };
  
  console.log(add(5, 3));