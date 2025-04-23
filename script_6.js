// Functions

function add(a, b) {
  return a + b;
}

console.log(add(2, 4));

// Arrow Function => Part of modern JS

const sum = (a,b) => {
    return a + b;
}

console.log(sum(3, 5));

// Create a function using function keyword that takes
// a string as an argument and returns the number of vovels in string.

function vovelCount(a){
    let count = 0;
    for (let char of a){
        lower_char = char.toLowerCase()
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count; 
};

let testString = "check this";

a = vovelCount(testString);
console.log(a);


