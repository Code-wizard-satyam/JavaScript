let dis= document.querySelector("#mainDisplay");

let allClrBtn = document.querySelector("#allClr");
let delBtn = document.querySelector("#del");

let equalBtn = document.querySelector("#equals");
let dotBtn = document.querySelector("#dot");

let addBtn = document.querySelector("#add");
let subtractBtn = document.querySelector("#subtract");
let multiplyBtn = document.querySelector("#multiply");
let divideBtn = document.querySelector("#divide");

let zeroBtn = document.querySelector("#zero");
let doubleZeroBtn = document.querySelector("#doubleZero")
let oneBtn = document.querySelector("#one");
let twoBtn = document.querySelector("#two");
let threeBtn = document.querySelector("#three");
let fourBtn = document.querySelector("#four");
let fiveBtn = document.querySelector("#five");
let sixBtn = document.querySelector("#six");
let sevenBtn = document.querySelector("#seven");
let eightBtn = document.querySelector("#eight");
let nineBtn = document.querySelector("#nine");

function addOperator(oper) {
    let lastChar = dis.innerText[dis.innerText.length - 1]
    if ("+-*/".includes(lastChar)){
        dis.innerText[dis.innerText.length - 1].slice();
        dis.innerText[dis.innerText.length - 2].append(`${oper}`);
    }else{
    dis.append(`${oper}`);
}};

allClrBtn.addEventListener("click", () => {
    dis.innerText = "";
});
delBtn.addEventListener("click", () => {
    dis.innerText = dis.innerText.slice(0, -1);
});

equalBtn.addEventListener("click", () => {
    try {
        let expression = dis.innerText;
        let result = eval(expression)
        dis.innerText = result;
    } catch {
        dis.innerText = "Error";
    }
});
dotBtn.addEventListener("click", () => {
    dis.innerText += ".";
});

addBtn.addEventListener("click", () => {
    addOperator("+");
});
subtractBtn.addEventListener("click", () => {
    addOperator("+");
});
multiplyBtn.addEventListener("click", () => {
    addOperator("*");
});
divideBtn.addEventListener("click", () => {
    addOperator("/");
});

zeroBtn.addEventListener("click", () => {
    dis.innerText += "0";
});
doubleZeroBtn.addEventListener("click", () => {
    dis.innerText += "00";
});

oneBtn.addEventListener("click", () => {
    dis.innerText += "1";
});
twoBtn.addEventListener("click", () => {
    dis.innerText += "2";
});
threeBtn.addEventListener("click", () => {
    dis.innerText += "3";
});
fourBtn.addEventListener("click", () => {
    dis.innerText += "4";
});
fiveBtn.addEventListener("click", () => {
    dis.innerText += "5";
});
sixBtn.addEventListener("click", () => {
    dis.innerText += "6";
});
sevenBtn.addEventListener("click", () => {
    dis.innerText += "7";
});
eightBtn.addEventListener("click", () => {
    dis.innerText += "8";
});
nineBtn.addEventListener("click", () => {
    dis.innerText += "9";
});