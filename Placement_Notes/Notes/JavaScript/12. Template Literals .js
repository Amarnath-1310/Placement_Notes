// ============================================
// TEMPLATE LITERALS (Backticks ` `)
// ============================================
// Template literals use backticks (`) instead of single or double quotes.
// They allow: 1) Embedding variables with ${}  2) Multiline strings  3) Easy use of quotes inside.

// ============================================
// EXAMPLE 1 — Teach in class
// ============================================
let firstName = "Ramya";
let lastName = "Murali";
let city = "Chennai";

// ----------------------------------------
// 1. OLD WAY: String concatenation with +
// ----------------------------------------
console.log(firstName + " " + lastName + " lives in " + city);
// Output: Ramya Murali lives in Chennai

// ----------------------------------------
// 2. TEMPLATE LITERAL: Backticks and ${}
// ----------------------------------------
// Same result, but cleaner – no + and no extra " " for spaces.
let msg = `${firstName} ${lastName} lives in ${city}`;
console.log(msg);
// Output: Ramya Murali lives in Chennai

// ----------------------------------------
// 3. STRING INTERPOLATION
// ----------------------------------------
// Putting variables directly inside the string with ${variableName}
console.log(`${firstName} ${lastName} lives in ${city}`);
// Ramya Murali lives in Chennai

// You can put any expression inside ${ }
console.log(`Next year age: ${20 + 1}`);
// Next year age: 21

// ----------------------------------------
// 4. MULTILINE STRING
// ----------------------------------------
// With backticks, you can break the string into multiple lines without using \n
let multilineMsg = `happy
birthday`;
console.log(multilineMsg);
// happy
// birthday

// ----------------------------------------
// 5. SINGLE AND DOUBLE QUOTES INSIDE STRING
// ----------------------------------------
// With double quotes, you can use single quote (apostrophe) inside without escaping
msg = "cat's name is toto";
console.log(msg);
// cat's name is toto

// With backticks, you can use BOTH single and double quotes inside – no escaping needed
msg = `cat's name is "toto"`;
console.log(msg);
// cat's name is "toto"

// ============================================
// EXAMPLE 2 — Students try (same pattern as Example 1)
// ============================================
// Try: Use your own name, subject, and college. Old way with + then template literal with `${}`.

let studentName = "Priya";
let subject = "JavaScript";
let college = "ABC College";

// Old way
console.log(studentName + " is learning " + subject + " at " + college);
// Output: Priya is learning JavaScript at ABC College

// Template literal way
let studentMsg = `${studentName} is learning ${subject} at ${college}`;
console.log(studentMsg);
// Output: Priya is learning JavaScript at ABC College

// ----------------------------------------
// QUICK SUMMARY
// ----------------------------------------
// Use backticks (`) when you want:
// - To embed variables: `${name}`
// - Multiline strings without \n
// - To use ' and " inside the string easily
