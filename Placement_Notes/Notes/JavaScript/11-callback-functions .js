// When we pass a function to another function, the passed function is called a callback, and the function receiving it is called a higher-order function.

// Callback Function
function add(a, b) {          // a and b → parameters
  return a + b;
}

// Another Callback Function
function multiply(a, b) {     // a and b → parameters
  return a * b;
}


// Higher-Order Function
function calculate(a, b, operation) {

  // a → will receive first number
  // b → will receive second number
  // operation → will receive a FUNCTION (add or multiply)

  return operation(a, b);   // call the function stored in operation
}


// Function Call
calculate(5, 3, add);