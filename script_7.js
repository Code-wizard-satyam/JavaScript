// For Each Loop in array
// It creates a loop in an array.
const fruits = ["apple", "banana", "cherry", "date"];
fruits.forEach( function printVal(val){
    console.log(val);
});

// forEach has 3 parameters: value, index, array

fruits.forEach(function printValWithIndex(val, index) {
    console.log(`Index ${index}: ${val}`);
    console.log(`Array length: ${fruits.length}`);
});

