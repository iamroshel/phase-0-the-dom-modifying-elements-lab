// Write your code here!
const element = document.querySelector("main");
element.remove();
const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);

newHeader.id = "victory"

newHeader.textContent = " Roshel is the champion"




