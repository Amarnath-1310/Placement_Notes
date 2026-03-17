let x = 10;
let y = "10";
let z = 20;

// ==  Equal to (loose equality)
console.log(x == y);   // true  → values are same, type is ignored

// === Strict equal to (strict equality)
console.log(x === y);  // false → type is different (number vs string)

// !=  Not equal to (loose inequality)
console.log(x != y);   // false → values are same, type ignored

// !== Strict not equal to (strict inequality)
console.log(x !== y);  // true  → types are different

// >   Greater than
console.log(z > x);    // true  → 20 is greater than 10

// <   Less than
console.log(x < z);    // true  → 10 is less than 20

// >=  Greater than or equal to
console.log(x >= 10);  // true  → equal to 10

// <=  Less than or equal to
console.log(x <= 10);  // true  → equal to 10
