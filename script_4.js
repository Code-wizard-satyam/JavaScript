// String
let str = "This is a string.";
let str_2 = 'This is also a string.';

str_length = str.length;
console.log(str_length);

pos_3 = str[2];
console.log(pos_3)

// Template literal
special_string = `This is a template literal. \n  ${1+2+3}`

// Difference

let obj ={
    item : "pen",
    price : 10,
}

console.log("The cost of ", obj.item, "is", obj.price)    // String
console.log(`The cost of ${obj.item} is ${obj.price}`)    // Template literal

upper_str = str.toUpperCase()
lower_str = str.toLowerCase()
removed_spaces_str = str.trim()

// String Methods

/*
str.slice(start,end)   Slices a string
str,concat(str2)       Joins 2 strings
str.replace(searchVal, newVal)
str.split(separator)   Splits a string into an array
str.indexOf(searchVal)  Finds the index of a string
str.lastIndexOf(searchVal) Finds the last index of a string
str.includes(searchVal)  Checks if a string is present in the string
str.charAt(idx)          character at index?
*/


