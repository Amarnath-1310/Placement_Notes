// =====================================
// MAIN DIFFERENCE: while vs do-while
// =====================================
// • while:      CHECK condition first → if true, run body. So body can run 0 times (if false from start).
// • do-while:   RUN body first → then check condition. So body always runs at least 1 time.
//
// When condition is true from the start (e.g. i=0, i<10), both give the same output.
// When condition is FALSE from the start, the difference shows: while = 0 runs, do-while = 1 run (see example below).

/*
while loop:-
Syntax:
    while (expression) {
       Statement(s) to be executed if expression is true
    }

do while loop:-
    Syntax:
    do {
    Statement(s) to be executed;
    } while (expression);

*/
// while vs ForLoop -
// A for loop is generally used when the number of iteration is fixed and known but we use the while loop whne the number of iterations is not known.

//Example of while loop
let i = 0;
while (i < 10) {
console.log(i);
i++;
}

/* Output: 
0
1
2
3
4
5
6
7
8
9
*/

// ----- When condition is FALSE from the start (this is where they differ!) -----
let x = 10;
while (x < 10) {        // 10 < 10 is false → body never runs
    console.log("while:", x);
    x++;
}
// Output: (nothing)

x = 10;
do {
    console.log("do-while:", x);   // body runs first, then condition is checked
    x++;
} while (x < 10);
// Output: do-while: 10   ← runs once even though condition was already false

//Example of do while loop
i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

/* Output: 
0
1
2
3
4
5
6
7
8
9
*/

//Example of while loop with break statement
i = 0;
while (i < 10) {
    if(i==5)
    {
        break;
    }
    console.log(i);
    i++;
}

/* Output: 
0
1
2
3
4
*/

//Example of while loop with continue statement
i = 0;
while (i < 10) {
    if(i==5)
    {
        continue;
    }
    console.log(i);
    i++;
}

/* Output: 
0
1
2
3
4
6
7
8
9
*/


//Example of do while loop with break statement
i = 0;
do {
    if(i==5)
    {
        break;
    }
    console.log(i);
    i++;
} while (i < 10);

/* Output: 
0
1
2
3
4
*/

//Example of do while loop with continue statement
i = 0;
do {
    if(i==5)
    {
        continue;
    }
    console.log(i);
    i++;
} while (i < 10);

/* Output: 
0
1
2
3
4
6
7
8
9
*/
