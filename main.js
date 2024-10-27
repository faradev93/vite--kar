import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML;

// Color Change With DOM
const text = document.getElementById("box1");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  text.style.backgroundColor = "green";
  text.style.transition = "2s";
});

// Test-2

let kilik = document.getElementById("bezan");
let matn = document.getElementById("texty");

kilik.addEventListener("click", () => {
  matn.style.color = "#ffffffc9";
  matn.style.transition = "2s";
  matn.style.textAlign = "center";
});
kilik.addEventListener("click", () => {
  matn.style.fontSize = "19px";
  console.log(matn);
});
console.log(typeof matn);

// s

const newParagraph = document.createElement("p");
newParagraph.innerText = "Test Man";
document.body.appendChild(newParagraph);
newParagraph.style.backgroundColor = "Violet";
newParagraph.style.color = "white";
newParagraph.style.fontSize = "45px";