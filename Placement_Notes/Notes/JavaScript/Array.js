let prices = [100, 250, 75, 300, 50];
console.log("Prices:", prices);
// Output: [100, 250, 75, 300, 50]


// map() → Transform each → new array (same length)
let withTax = prices.map(p => p * 1.1);   // 10% tax
console.log("Prices with 10% tax:", withTax);
// Output: [110, 275, 82.5, 330, 55]


// filter() → Keep only if condition true → new array
let expensive = prices.filter(p => p > 100);
console.log("Prices greater than 100:", expensive);
// Output: [250, 300]


// reduce() → Squash all into one value (e.g. total)
let totalBill = prices.reduce((sum, p) => sum + p, 0);
console.log("Total bill:", totalBill);
// Output: 775


// some() → "At least one passes?" → true/false
console.log("Any item above 200?", prices.some(p => p > 200));
// Output: true


// every() → "All pass?" → true/false
console.log("All prices positive?", prices.every(p => p > 0));
// Output: true


// forEach() → Do something for each (no new array)
prices.forEach(p => console.log("Price:", p));
// Output:
// Price: 100
// Price: 250
// Price: 75
// Price: 300
// Price: 50