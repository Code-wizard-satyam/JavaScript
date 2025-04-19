// This is a comment
/* this is a multiline comment.
wibyebvibeihbeibievuj */

// Urinary Operator

let a = 5;
let b = 2;

console.log("a = ", a , " & b = ", b)

console.log("a++ =", a++)
console.log("a = ", a)

console.log("--b =", --b)
console.log("b = ", b)

// Logical Operator

/*
AND  &&
OR   ||
NOT  !
*/

// Conditional Statement

let color;
let mode = "dark";


if (mode === "dark_mode"){
    color = "black";
} else {
    color = "white";
};

let number = 2;

if (number % 2 === 0){
    console.log(number, " is even");
} else {
    console.log(number, " is odd");
}


let age = 34;

if(age <= 18){
    console.log("You are a minor");
} else if ( (age > 18) && ( age < 60) ){
    console.log("You are an adult");
}else{
    console.log("You are a senior");
}

// ternary operator
// condition ? true output : false output

let result = age > 18 ? "adult" : "not adult";

console.log(result);

// prompt and alert

let prpt = prompt("Enter a number here: ");

if (prpt % 5 === 0){
    alert("Number is divisible by 5");
}else{
    alert("Number is not divisible by 5");
}

