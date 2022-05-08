// javascript/training/mistakes/coding-dom №1
const items = [...document.querySelectorAll("li")];

console.log(
  items
    .map((item) => item.textContent)
    .filter((year) => [...year].reduce((acc, char) => acc + +char, 0) === 6)
    .reduce((acc, year) => acc + +year, 0)
); // -> 6057
