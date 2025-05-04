let element1 = document.querySelector("h2");
console.dir(element1);
element1.innerText = element1.innerText + " Hello mic Check 123";

let element2 = document.querySelectorAll("div");
console.dir(element2);

let i = 1;

for (const divs of element2) {
    divs.innerText = i + ". New text here"
    i++
}