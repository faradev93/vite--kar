let text = document.getElementById("text");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  text.style.backgroundColor = "#c953dd";
  text.style.transition = "2s";
});

const newParagraph = document.createElement("p");
newParagraph.innerText = "کصکش سلام";
document.body.appendChild(newParagraph);
newParagraph.style.fontSize = "50px";
newParagraph.style.fontFamily = "B Yekan";
//
const button2 = document.createElement("button");
button2.innerText = "بزن رو من";
document.body.appendChild(button2);
button2.style.fontSize="75px"
