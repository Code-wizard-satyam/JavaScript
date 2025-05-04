let btn = document.querySelector("button");
currentMode = "lightMode"
// btn.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
// };

// btn.onmouseover = (evn) =>{
//     console.log("You are on button");
// };

// btn.addEventListener("mouseover", (evn)=>{
//     console.log("You are on button.");
//     console.log(evn.type);
// });

btn.addEventListener("click", ()=>{

    if (currentMode==="lightMode") {
        document.querySelector("body").style.backgroundColor = "black";
        currentMode = "darkMode"
    }else if (currentMode === "darkMode") {
        document.querySelector("body").style.backgroundColor = "white";
        currentMode = "lightMode"
    };
});
