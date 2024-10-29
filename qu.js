let text = document.getElementById("text");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  text.style.backgroundColor = "#c953dd";
  text.style.transition = "2s";
});
let age = 35;
const sum = 4 * 6 + age + "gerr ${age}";
console.log(sum);

try {
  riskyFunction();
} catch (error) {
  console.error("ریسکی فانکشن اجرا نشد");
  finally{console.log(4+5)}
}

function test() {
  if (age - 5 === 15) {
    throw new Error(" تو جایکش");
  } else if (age > 30 && age <= 40) {
    console.log("khobe:))))");
  }
}
test();
