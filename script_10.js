let div = document.getElementById("box");

div.style.backgroundColor = "green";
div.style.width = "200px";
// div.style.visibility ="hidden";

div.innerText ="Hello Boyeeee";

div.setAttribute("class", "bhhh");

let newBtn = document.createElement("button");
console.dir(newBtn);

newBtn.innerText = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
newBtn.style.borderRadius ="5px";
newBtn.style.margin = "10px";

div.before(newBtn);