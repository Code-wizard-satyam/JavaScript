// Arrays   ; Collection of Items

let heros= ["ironman","hulk","thor","batman","deadpool"];
let marks =[99,78,45,32,73,83,79];
let info = ["Rahul", 99, "Delhi"];

// Looping an array

for ( const hero of heros){
    console.log(hero);
}

length_hero = heros.length

for (let x = 0; x < length_hero; x++){
    console.log(heros[x]);
}

// Finding average marks of the class.

let sum = 0;
for (let x of marks){
    sum += x
}
console.log(`The average of class is ${sum/marks.length}`)


// Array Methods
/*
push("Item")                 add to end
pop("Item")                  delete from end and return
toString()                   convert array to string
toNumber()                   convert array to number
concat(array_2)              join multiple arrays
unshift("Item")              Add to start
shift("Item")                delete from start and return
slice()                      same as string method. do not change orignal array
splice()                     delete and add at same time. change orignal array    impt
*/

