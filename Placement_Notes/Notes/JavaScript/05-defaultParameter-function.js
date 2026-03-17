// Before ES6 (2015), JavaScript did not support default parameters directly. However, you could achieve similar functionality using logical OR (||) or by checking for undefined values within the function body.

// Example using logical OR (||)

function addition(a,b=5)
{
    return a+b;
}
console.log(addition(25,30)); //30 is passed for b 
console.log(addition(25));   // b takes default value 5