// ===============================
// JAVASCRIPT DATA TYPES - ALL IN ONE
// ===============================

// ===== PRIMITIVE DATA TYPES =====

// 1. Number
let age = 25;
let price = 99.99;

// 2. String
let name = "Raj";
let city = 'Chennai';
let greeting = `Hello ${name}`;

// 3. Boolean
let isLoggedIn = true;
let isAdmin = false;

// 4. Undefined
let score;  // declared but not assigned

// 5. Null
let selectedUser = null;

// 6. BigInt
let bigNumber = 123456789012345678901234567890n;

// 7. Symbol - unique identifier
// Each Symbol is unique, even if they have the same description
// when it is used? when we want to create unique keys for objects or when we want to create constants that are guaranteed to be unique.
let id1 = Symbol("id");
let id2 = Symbol("id");

/*
let user = { name: "Rohit" };

user.id = 101;   // Developer A
user.id = 202;   // Developer B
// id = 202


let user = { name: "Rohit" };

let id1 = Symbol("id");
let id2 = Symbol("id");

user[id1] = 101;
user[id2] = 202;
*/

// ===== NON-PRIMITIVE (REFERENCE) DATA TYPES =====

// 8. Object
let person = {
    name: "Raj",
    age: 25,
    city: "Chennai"
};

// 9. Array
let fruits = ["Apple", "Banana", "Mango"];

// 10. Function
function greet() {
    return "Hello!";
}

let greetUser = function() {
    return "Hi User!";
};

// ===============================
// PRINTING VALUES
// ===============================

console.log("Number:", age, price);
console.log("String:", greeting);
console.log("Boolean:", isLoggedIn);
console.log("Undefined:", score);
console.log("Null:", selectedUser);
console.log("BigInt:", bigNumber);
console.log("Symbol comparison:", id1 === id2); // false

console.log("Object:", person);
console.log("Array:", fruits);
console.log("Function:", greet());
console.log("Function Expression:", greetUser());


