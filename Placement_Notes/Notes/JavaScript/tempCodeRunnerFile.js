const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Please enter your age: ", (ageInput) => {
    ageInput = Number(ageInput);    
    if (ageInput >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }       
    readline.close();
});