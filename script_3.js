// LOOPS
/*
FOR LOOP

for (expression 1; expression 2; expression 3) {
    // code block to be executed
  }
Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed.
*/

for (let i = 1; i <= 5; i++){
    console.log("This is gonna print 5 times.")
}

/*
WHILE LOOP

while (expression) {
    code block to be executed
}
*/

let i = 1;
while (i<=15){
    console.log("This is gonna print 15 times");
    i++;
}

/*
DO WHILE LOOP
condition is checked post while loop

do{
    do some work
}while(condition);
*/
/*
FOR OF LOOP

for (const value of iterable) {
    do this work    
}
*/
let fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// Printing all even numbers from 0 to 100

for (i = 0;i <= 100; i++){
    if(i % 2== 0){
    console.log(i, "is an even number");}
}

// Game
// Guess the number between 1 to 100

let game_number = 25;
let user_number = prompt("Guess a number here: ");

while (user_number != game_number) {
    if (user_number < game_number) {
        user_number= prompt("Guess higher number please");
    }else{
        user_number= prompt("Guess lower number please");
    }
}