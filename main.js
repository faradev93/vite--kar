import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML;

// Color Change With DOM
const text = document.getElementById("box1");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  text.style.backgroundColor = "red";
  text.style.transition = "2s";
});
