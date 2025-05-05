let userScore = 0;
let compScore = 0;
let userChoice = "";
let compChoice ="";
let choice_list = ["stone","paper","scissor"];

let choices = document.querySelectorAll(".btt");
let dis = document.querySelector("h3");
let resultDeclear = document.querySelector(".lasthd");
let us = document.querySelector("#userScore")
let cs = document.querySelector("#compScore")

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        userChoice = choice.textContent.toLowerCase();
        console.log("You clicked:", userChoice);
        compRandomMechanism();
        checkWinner();
    });
});

function compRandomMechanism() {
    let a = Math.floor(Math.random() * 3);
    compChoice = choice_list[a];
    dis.innerText = ("Computer choose " + compChoice);
    dis.style.visibility = ("visible");
};

function checkWinner() {
    if (userChoice === compChoice) {
        resultDeclear.innerText = ("This is a draw. Both choose " + userChoice);
    } else if (userChoice === "paper" && compChoice === "scissor"){
        resultDeclear.innerText =("You Lost. Scissor cuts paper");
        compScore += 1;
        cs.innerText = (compScore);
    } else if (userChoice === "scissor" && compChoice === "paper"){
        resultDeclear.innerText =("You Won. Scissor cuts paper");
        userScore += 1;
        us.innerText = (userScore);
    } else if (userChoice === "paper" && compChoice === "stone"){
        resultDeclear.innerText =("You Won. Paper folds stone");
        userScore += 1;
        us.innerText = (userScore);
    } else if (userChoice === "stone" && compChoice === "paper"){
        resultDeclear.innerText =("You Lost. Paper folds stone");
        compScore += 1;
        cs.innerText = (compScore);
    } else if (userChoice === "stone" && compChoice === "scissor"){
        resultDeclear.innerText =("You Won. Stone smashes scissor");
        userScore += 1;
        us.innerText = (userScore);
    } else if (userChoice === "scissor" && compChoice === "stone"){
        resultDeclear.innerText =("You Lost. Stone smashes scissor");
        compScore += 1;
        cs.innerText = (compScore);
    }
};