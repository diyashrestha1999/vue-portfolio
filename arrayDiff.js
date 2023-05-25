function digitize(n) {
  //code here
  let m = [];
  for (let x of n.toString()) {
    m.push(parseInt(x));
  }

  return m.reverse();
}
console.log(digitize(35231));
