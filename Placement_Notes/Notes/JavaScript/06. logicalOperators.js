// =====================================
// LOGICAL OPERATORS (3 types)
// =====================================
//
//   &&   AND   →  Both must be true
//   ||   OR    →  At least one must be true
//   !    NOT   →  Flip: true becomes false, false becomes true
//

// -------------------------------------
// 1. AND (&&) — Both must be true
// -------------------------------------
// Student needs BOTH hall ticket AND ID card to enter.

let hasHallTicket = true;
let hasIDCard = true;

if (hasHallTicket && hasIDCard) {
    console.log("Student can write the exam");
} else {
    console.log("Student cannot enter the exam hall");
}
// Output: Student can write the exam
// Why: hasHallTicket is true AND hasIDCard is true → condition is true


// -------------------------------------
// 2. OR (||) — At least one must be true
// -------------------------------------
// User can login with Email OR Phone. Either one is enough.

let loginWithEmail = false;
let loginWithPhone = true;

if (loginWithEmail || loginWithPhone) {
    console.log("User logged in successfully");
} else {
    console.log("Login failed");
}
// Output: User logged in successfully
// Why: loginWithPhone is true → we don't need both, one is enough


// -------------------------------------
// 3. NOT (!) — Flip the value
// -------------------------------------
// shopClosed = false means shop is open. So !shopClosed = "not closed" = true.

let shopClosed = false;

if (!shopClosed) {
    console.log("Shop is open");
} else {
    console.log("Shop is closed");
}
// Output: Shop is open
// Why: shopClosed is false → !false is true → so we run "Shop is open"
