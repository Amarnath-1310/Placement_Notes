// ========================================================
// TERNARY OPERATOR (Conditional Operator)
// ========================================================

// ✅ Definition:
// The ternary operator is a shorthand for an if-else statement.
// It evaluates a condition and returns one of two values depending on whether the condition is true or false.

// ✅ Syntax (easy to remember):
//   condition ? valueIfTrue : valueIfFalse
//
// Read it as: "Is condition true? Then use this : else use this."
//   ? = "if true, give this"
//   : = "else, give this"
//
// Same as:  if (condition) { x = valueIfTrue; } else { x = valueIfFalse; }

// ========================================================
// Example 1: Check if age is adult or minor
let age = 18;
let ageStatus = age >= 18 ? "Adult" : "Minor";
console.log("Example 1:", ageStatus); // Output: "Adult"

// ========================================================
// Example 2: Check if a number is even or odd
let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log("Example 2:", result); // Output: "Odd"

// ========================================================
// Example 3: Nested ternary (for grading)
let score = 85;
let grade = score >= 90 ? "A" 
            : score >= 75 ? "B" 
            : score >= 50 ? "C" 
            : "F";
console.log("Example 3:", grade); // Output: "B"

// ========================================================
// Quick Tip:
// Use ternary for simple conditions. Avoid too much nesting for readability.
