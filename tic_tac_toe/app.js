let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetBtn")
let win = document.querySelector("h2")

let turnO = true
let gameOver = false

const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const disableBoxes = () =>{
    boxes.forEach(box => {
        box.disabled = true;
    });
};

const checkWinner = () => {
    for (let pattern of winPattern) {
      let box1 = boxes[pattern[0]].innerText;
      let box2 = boxes[pattern[1]].innerText;
      let box3 = boxes[pattern[2]].innerText;
  
      if (box1 !== "" && box1 === box2 && box2 === box3) {
        win.innerText = box1 + " is winner.";
        win.style.visibility = "visible";
        // alert(box1 + " is the winner!");
        disableBoxes();
        gameOver = true;
        return;
      }
      
    }
  };

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO) {
            box.innerHTML = ("O");
            turnO = false;
        }else{
            box.innerHTML = ("X");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});



reset.addEventListener("click", () => {
    boxes.forEach(box=> {
        box.innerHTML = ("");
    });

    boxes.forEach(box => {
        box.disabled = false
    });
    win.style.visibility = "hidden";
})