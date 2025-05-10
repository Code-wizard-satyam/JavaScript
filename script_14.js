// // Async, Callback and promises


// console.log("One");
// console.log("Two");
// function hello(){
//     console.log("Hello");
// };
// setTimeout(hello, 2000);   // 2 sec = 2000 msec

// console.log("Three");
// console.log("Four");

// // Callback
// function sum(a,b){
//     console.log(a+b);
// };
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// };
// calculator(1,2,sum);

// function getData(dataId, getNextData) {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("Data ", dataId);
//             resolve("Sucess")
//             if(getNextData){
//                 getNextData();
//             };
//         }, 2000);
//     });
// };


// // Callback Hell
// getData(1, () => {
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });

//promises
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2");
      resolve("success");
    }, 6000);
  });
}

console.log("fetching data1");
let pr1 = asyncFunc1();
pr1.then((res) => {
  console.log(res);
  console.log("Fetching Data 2....")
  let pr2 = asyncFunc2();
  pr2.then((res) => {
    console.log("some data2");
    resolve("success");
  })  
});


function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", id);
            resolve();
        }, 1000);
    });
}

// Promise Chain
getData(1).then(() => 
    getData(2)).then(() => 
    getData(3)).then(() => 
    getData(4)).catch((error) => 
    console.error("Error:", error));

