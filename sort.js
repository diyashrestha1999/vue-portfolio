// function zero() {
//   return 0;
// }
// function one() {
//   return 1;
// }
// function two() {
//   return 2;
// }
// function three() {
//   return 3;
// }
// function four() {
//   return 4;
// }
// function five() {
//   return 4;
// }
// function six() {
//   return 6;
// }
// function seven() {
//   return 7;
// }
// function eight() {
//   return 8;
// }
// function nine() {
//   return 9;
// }
//
// function plus() {
//   return "+";
// }
// function minus() {
//   return "-";
// }
// function times() {
//   return "*";
// }
// function dividedBy() {
//   return;
// }
//
// console.log(four(plus(nine())));
// console.log(nine());
// console.log(plus(nine()));
// function add(item) {
//   return item ? eval(`1${item}`) : item;
// }
// console.log(add(2));
// console.log(new String(2));

function zero(item) {
  return item ? eval(`0${item}`) : `0`;
}
function one(item) {
  return item ? eval(`1${item}`) : `1`;
}
function two(item) {
  return item ? eval(`2${item}`) : `2`;
}
function three(item) {
  return item ? eval(`3${item}`) : `3`;
}
function four(item) {
  return item ? eval(`4${item}`) : `4`;
}
function five(item) {
  return item ? eval(`5${item}`) : `5`;
}
function six(item) {
  return item ? eval(`6${item}`) : `6`;
}
function seven(item) {
  return item ? eval(`7${item}`) : `7`;
}
function eight(item) {
  return item ? eval(`8${item}`) : `8`;
}
function nine(item) {
  return item ? eval(`9${item}`) : `9`;
}
function plus(item) {
  return `+${item}`;
}
function minus(item) {
  return `-${item}`;
}
function times(item) {
  return `*${item}`;
}
function dividedBy(item) {
  return "/" + item;
}

console.log(parseInt(4 / 3));
console.log(4 / 3);
