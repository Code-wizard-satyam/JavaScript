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

// //promises
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("success");
//     }, 6000);
//   });
// }

// console.log("fetching data1");
// let pr1 = asyncFunc1();
// pr1.then((res) => {
//   console.log(res);
//   console.log("Fetching Data 2....")
//   let pr2 = asyncFunc2();
//   pr2.then((res) => {
//     console.log("some data2");
//     resolve("success");
//   })  
// });


// function getData(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", id);
//             resolve();
//         }, 1000);
//     });
// }

// // Promise Chain
// getData(1).then(() => 
//     getData(2)).then(() => 
//     getData(3)).then(() => 
//     getData(4)).catch((error) => 
//     console.error("Error:", error));

async function myFUn(){
  console.log("Hello");
};

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api();    //first
  await api();    //second
  await api();    //third
}


function getData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched data for ID: ${id}`);
      resolve(`Data for ${id}`);
    }, 1000);
  });
}

// Async-Await Example
async function getAllData() {
  console.log("getting data.....");

  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);

  console.log("All data fetched!");
}

getAllData();