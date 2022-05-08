// javascript/training/mistakes/debugging №1
const obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };

console.log(
  Object.values(obj)
    .filter((num) => /^[12]/.test(num.toString()))
    .reduce((acc, num) => acc + num, 0)
); // -> 30
