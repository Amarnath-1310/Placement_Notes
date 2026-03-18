// break;
//   → Used inside a loop (for, while, do-while) or switch.
//   → Just the keyword and semicolon. No expression.
//
// continue;
//   → Used only inside a loop (for, while, do-while). Not in switch.
//   → Just the keyword and semicolon. No expression.
//
// Both are usually inside an if, so they run only when a condition is true:
//
//   for (...) {
//     if (condition) {
//       break;     // exit the loop
//     }
//   }
//
//   for (...) {
//     if (condition) {
//       continue;   // skip to next iteration
//     }
//   }

// Break Statement:-
// It is used to break the loop and exit the loop.
// Syntax: break;

// Continue Statement:-
// It is used to skip the current iteration and continue with the next iteration.
// Syntax: continue;

// ---------------------------------------------------------------------------------
//Example of break statement
for(let i=1;i<=10;i++) {
    if(i==5) {
        break;  // Exit loop immediately
    }
    console.log(i);
}
// Output: 1 2 3 4


// ---------------------------------------------------------------------------------
//Example of continue statement
for(let i=1;i<=10;i++) {
    if(i==5) {
        continue;  // Skip this iteration, go to next
    }
    console.log(i);
}
// Output: 1 2 3 4 6 7 8 9 10