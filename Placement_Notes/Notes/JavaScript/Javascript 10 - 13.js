// javascript notes 
// give me a simple defination and example sample code for each of the following topics

// Class : Constructor, Methods, Static methods
// A class is a blueprint for creating objects. It defines a set of properties and methods that the created objects will have.
// example for class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    static getSpecies() {
        return "Homo sapiens";
    }
}

// Inheritance: extends, super
// Inheritance allows a class to inherit properties and methods from another class. The `extends` keyword is used to create a subclass, and the `super` keyword is used to call the parent class's constructor or methods.
//example for inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

// Reality : Prototype-based underneath
// All objects in JavaScript are based on prototypes. When you create a class, it's essentially a syntactic sugar over the prototype-based inheritance system.

// Array : Ordered collection
// An array is a data structure that stores a collection of elements in a specific order.
// example for array
const fruits = ["apple", "banana", "orange"];

// Methods: push, pop, shift, unshift, splice, slice
// These are common methods used to manipulate arrays in JavaScript.
fruits.push("grape"); // output: ["apple", "banana", "orange", "grape"]
fruits.pop(); // output: ["apple", "banana", "orange"]
fruits.shift(); // output: ["banana", "orange"]
fruits.unshift("kiwi"); // output: ["kiwi", "banana", "orange"]
fruits.splice(1, 1); // output: ["kiwi", "orange"]
const citrus = fruits.slice(1, 2); // output: ["orange"] 

// Iteration: map, filter, reduce, forEach
// These are methods used to iterate over arrays and perform operations on their elements.
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num); // output: [1, 4, 9, 16, 25]
const evenNumbers = numbers.filter(num => num % 2 === 0); // output: [2, 4]
const sum = numbers.reduce((acc, num) => acc + num, 0); // output: 15
numbers.forEach(num => console.log(num)); // output: 1 2 3 4 5  

// String: Immutable
// Strings in JavaScript are immutable, meaning that once a string is created, it cannot be changed. Any operation that modifies a string will create a new string instead.
let str = "Hello";
str[0] = "h"; // This will not change the original string
console.log(str); // output: "Hello"

// Operations: Concatenation, Template literals, Search methods
// Concatenation is the process of combining two or more strings into one. Template literals allow for easier string interpolation and multi-line strings. Search methods are used to find specific characters or substrings within a string.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // output: "John Doe"
let greeting = `Hello, ${fullName}!`; // output: "Hello, John Doe!"
let index = fullName.indexOf("Doe"); // output: 5
let includesJohn = fullName.includes("John"); // output: true

// Unicode handling
// JavaScript strings are encoded in UTF-16, which allows for the representation of Unicode characters.
let unicodeStr = "Hello, 世界!";
console.log(unicodeStr); // output: "Hello, 世界!"

