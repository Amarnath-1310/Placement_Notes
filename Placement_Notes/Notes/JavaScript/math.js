// ============================================
// TRICKS TO REMEMBER (read this first!)
// ============================================
//
// ROUNDING (think of 4.7 on a number line)
//   Math.round(x)  → nearest integer  4.7→5, 4.4→4  (round = normal round)
//   Math.floor(x)  → down (floor = ground below)  4.7→4, -1.2→-2
//   Math.ceil(x)   → up (ceiling above)  4.1→5, -1.2→-1
//
// MIN / MAX
//   Math.min(a, b, ...)  → smallest of the arguments
//   Math.max(a, b, ...)  → largest (use with spread for array: Math.max(...arr))
//
// RANDOM
//   Math.random()  → 0 to 1 (never 1). Trick: "random float in [0, 1)"
//   Integer in range [min, max] inclusive: Math.floor(Math.random() * (max - min + 1)) + min
//
// OTHER
//   Math.abs(x)   → absolute value (remove minus)
//   Math.sqrt(x)  → square root
//   Math.pow(a,b) or a ** b  → a to the power of b
//
// ============================================
// MATH METHODS (Beginner Level)
// ============================================

// Rounding (trick: floor = down, ceil = up, round = nearest)
console.log(Math.round(4.7));   // 5
console.log(Math.floor(4.7));   // 4
console.log(Math.ceil(4.1));    // 5

// Min / max (trick: spread array for Math.max(...arr))
console.log(Math.max(1, 5, 3));  // 5
console.log(Math.min(1, 5, 3)); // 1

// Random: 0 to 1 (never exactly 1)
console.log(Math.random()); // e.g. 0.7234...

// Other
console.log(Math.abs(-7));   // 7
console.log(Math.sqrt(16));  // 4
console.log(Math.pow(2, 3)); // 8  (same: 2 ** 3)
