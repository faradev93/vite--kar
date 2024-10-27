let array = [1, 2, 3, "a", "picture", () => {}, true, null];

function man() {
  for (let x = 0; x <= array.length; x++) console.log(typeof array[x]);
}
man(array);

let a = 4 + "4";
let b = 222n;
let c = "reza";
let d = 12 && 24;
let e = 12 || 124;
let f = null;
let g = 2 * 2;
let h = 2 * "2";

console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g,
  typeof h
);

var text1 = "what a very";
text1 += " nice day";
console.log(text1);

let testc = "hello" + 5;
let testn = 6 + 5;
console.log(typeof testc, typeof testn);
console.log(testc, testn);

const user2 = [1, 2, 3, 4, () => {}, true, null];
const user = {
  firstName: "faramarz",
  lastName: "Rezakhanlou",
};

console.log(user.firstName);
console.log(user.lastName);
console.log(typeof user2[4]);

let age = 55;
if (isNaN(age)) {
  console.log("نامعتبر");
} else {
  console.log("معتبر");
}
console.log(typeof age);

let agetwo = 55;
agetwo += " sos";

if (isNaN(agetwo)) {
  console.log("Ghalat");
} else {
  console.log("Doroste");
}
console.log(agetwo);

let st = prompt();
let stkk = "zoog";

function golabi() {
  for (let xx = 0; xx <= st.length; xx++) console.log(st);
}

function reverse() {
  let splitstring = st.split("");
  let reverseArray = splitstring.reverse();
  let JoinArray = reverseArray;
  console.log(JoinArray);
}

golabi();
reverse();
// test2 revrese
let jomong = "Masoud";
function sib() {
  let splitstring = jomong.split("");
  let revb = splitstring.reverse();
  let joina = revb;
  console.log(joina);
}
sib();

