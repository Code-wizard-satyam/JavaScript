// Async, Callback and promises


console.log("One");
console.log("Two");
function hello(){
    console.log("Hello");
};
setTimeout(hello, 2000);   // 2 sec = 2000 msec

console.log("Three");
console.log("Four");

// Callback
function sum(a,b){
    console.log(a+b);
};
function calculator(a,b,sumCallback){
    sumCallback(a,b);
};
calculator(1,2,sum);

