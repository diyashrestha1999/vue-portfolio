function findSmallestInt(args) {
  let temp = [];
  for (let i = 0; i < args.length - 1; i++) {
    for (let j = i + 1; j < args.length; j++) {
      if (args[i] > args[j]) {
        temp = args[i];
        args[i] = args[j];
        args[j] = temp;
      }
    }
  }
  return args[0];
}
console.log(findSmallestInt([34, 15, 88, 2]));
