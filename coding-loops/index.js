// javascript/training/mistakes/coding-loops №1
const arr = [10, 20, 30, 40, 21, 32, 51];

console.log(
  arr
    .filter((num) => num.toString().match(/^[12]/) !== null)
    .reduce((acc, num) => acc + num, 0)
); // -> 51
