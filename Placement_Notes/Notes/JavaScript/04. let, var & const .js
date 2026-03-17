// ============================================
// JAVASCRIPT VAR, LET & CONST - COMPLETE GUIDE
// ============================================

/* 
===========================================
1. INTRODUCTION
===========================================
JavaScript has three ways to declare variables:
- var (ES5 and before) - Function scoped, hoisted
- let (ES6+) - Block scoped, not hoisted
- const (ES6+) - Block scoped, not hoisted, immutable binding

Key Differences:
| Feature        | var       | let       | const     |
|----------------|-----------|-----------|-----------|
| Scope          | Function  | Block     | Block     |
| Redeclaration  | Yes       | No        | No        |
| Reassignment   | Yes       | Yes       | No        |
*/

// ============================================
// REDECLARATION vs REASSIGNMENT — Easy for students
// ============================================
//
// DECLARE    = First time you create the variable (with var, let, or const).
//             Example:  let age = 20;
//
// REDECLARE  = Using the keyword AGAIN with the SAME variable name.
//             Example:  let age = 25;   ← "let" again on same name = redeclaration
//             Think: "I'm creating another variable with the same name" (usually not allowed).
//
// REASSIGN   = Changing the value WITHOUT writing let/var/const again.
//             Example:  age = 25;   ← no "let", just new value = reassignment
//             Think: "Same variable, new value."
//
// Simple comparison (same variable "score"):
//   let score = 10;     ← DECLARE (first time)
//   let score = 20;     ← REDECLARE (keyword again) — ❌ Error with let/const
//   score = 20;         ← REASSIGN (no keyword)    — ✅ OK with let, ❌ Error with const
//

// ============================================
// EXAMPLE 1 — Teach in class
// ============================================

/*
===========================================
1. var - FUNCTION SCOPED (OLD WAY)
===========================================
Definition:
- Function scoped
- Can be redeclared
- Can be reassigned
*/

function varExample() {
  // Step 1: Declare (first time)
  var count = 10;

  // Step 2: Redeclare = "var" again on same name (allowed only with var)
  var count = 20;

  // Step 3: Reassign = no "var", just new value
  count = 30;

  // Step 4: Print the value
  console.log("var count:", count);
}

varExample();

// Output:
// var count: 30


/*
===========================================
2. let - BLOCK SCOPED (MODERN WAY)
===========================================
Definition:
- Block scoped
- Cannot be redeclared
- Can be reassigned
*/

if (true) {
  // Step 1: Declare (first time)
  let age = 25;

  // Step 2: Reassign (no "let", just new value) — allowed
  age = 26;

  // Step 3: Redeclare ("let" again) — NOT allowed
  // let age = 30; ❌ Error

  // Step 4: Print the value
  console.log("let age:", age);
}

// console.log(age); ❌ Error (outside block)

// Output:
// let age: 26


/*
===========================================
3. const - BLOCK SCOPED & IMMUTABLE BINDING
===========================================
Definition:
- Block scoped
- Must be initialized
- Cannot be reassigned
*/

{
  // Step 1: Declare and initialize (first time)
  const PI = 3.14;

  // Step 2: Reassign (new value) — NOT allowed for const
  // PI = 3.14159; ❌ Error

  // Step 3: Print the value
  console.log("const PI:", PI);
}
// Output:
// const PI: 3.14


// ============================================
// EXAMPLE 2 — Students practice (do this yourself)
// ============================================
// Instructions: Follow the same pattern as Example 1 above.
// 1) Use var inside a function: declare, redeclare, reassign, then console.log.
// 2) Use let inside a block (if or {}): declare, reassign, console.log. Try commenting out a redeclaration to see the error.
// 3) Use const inside a block: declare and initialize, console.log. Try commenting out a reassignment to see the error.

function studentVarExample() {
  var score = 50;
  var score = 75;   // redeclare allowed with var
  score = 100;     // reassign
  console.log("var score:", score);
}
studentVarExample();
// Output: var score: 100

if (true) {
  let attempts = 1;
  attempts = 2;    // reassign allowed with let
  // let attempts = 3;  // ❌ Uncomment this line to see error (redeclare not allowed)
  console.log("let attempts:", attempts);
}
// Output: let attempts: 2

{
  const MAX_ITEMS = 10;
  // MAX_ITEMS = 20;  // ❌ Uncomment this line to see error (reassign not allowed)
  console.log("const MAX_ITEMS:", MAX_ITEMS);
}
// Output: const MAX_ITEMS: 10

/*
===========================================
FINAL SUMMARY
===========================================
var   → function scoped, avoid using
let   → block scoped, value can change
const → block scoped, value should not change (default choice)
===========================================
*/
