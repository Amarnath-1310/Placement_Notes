// ============================================
// TYPE CONVERSION vs TYPE COERCION — Easy for students
// ============================================
//
// Simple rule:
//   TYPE CONVERSION (Explicit) = WE convert using Number(), String(), Boolean()
//   TYPE COERCION (Implicit)  = JAVASCRIPT converts automatically during an operation
//

// ============================================
// 1. TYPE CONVERSION (Explicit — we do it)
// ============================================
// We decide when and how to change the type. Use: Number(), String(), Boolean()

// Example: String → Number
let ageStr = "25";
let ageNum = Number(ageStr);
console.log(ageNum);           // 25
console.log(typeof ageNum);   // number
// Output: 25, number

// Example: Number → String
let price = 500;
let priceStr = String(price);
console.log(priceStr);        // "500"
console.log(typeof priceStr); // string
// Output: 500, string

// Example: Value → Boolean
let value = 1;
let asBoolean = Boolean(value);
console.log(asBoolean);       // true
// Output: true

// Common methods:
//   Number(x)  → convert to number
//   String(x)  → convert to string
//   Boolean(x) → convert to boolean


// ============================================
// 2. TYPE COERCION (Implicit — JavaScript does it)
// ============================================
// During an operation, JS automatically converts types. We don't call Number() or String().

// Example: + with string → number becomes string, then concatenation
let result1 = "5" + 2;
console.log(result1);   // "52"
// Why: "5" is string, 2 is number. JS converts 2 → "2", then "5" + "2" = "52"
// Output: 52 (as string)

// If you want "5" + 2 to give 7 (number): convert the string to number first
let resultAsNumber = Number("5") + 2;
console.log(resultAsNumber);   // 7
// Other way: +"5" + 2  → unary + also converts "5" to number 5. So 5 + 2 = 7.
// You don't have to change to 5 + 2; just convert when you need math: Number("5") + 2

// Example: - with string → string becomes number, then subtraction
let result2 = "10" - 2;
console.log(result2);   // 8
// Why: - only does math. JS converts "10" → 10, then 10 - 2 = 8
// Output: 8

// Example: * with string → string becomes number
console.log("5" * 2);   // 10
// Output: 10


// ============================================
// 3. QUICK COMPARISON (teach this)
// ============================================
// Conversion: we convert
let a = "100";
let b = Number(a);
console.log(b);   // 100
// Output: 100

// Coercion: JS converts automatically
let x = "100" - 10;
console.log(x);   // 90
// Output: 90


// ============================================
// 4. BEST BEGINNER DEMO (ask students)
// ============================================
console.log("5" + 2);   // "52"  → + with string: number becomes string, then concatenate
console.log("5" - 2);   // 3     → - only does math: "5" becomes number 5, then 5 - 2 = 3
// Same "5", same 2 — but + gives "52" and - gives 3. Why? Operator decides what type is needed.


// ============================================
// QUICK SUMMARY
// ============================================
// Type Conversion  = Manual. We use Number(), String(), Boolean().
// Type Coercion    = Automatic. JS converts during operations (e.g. "5" + 2, "10" - 2).
// Rule: + with a string → concatenation (number turns to string). - * / % → math (string turns to number).
