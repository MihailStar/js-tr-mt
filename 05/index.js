// javascript/training/mistakes/5 №1
{
  let num = 12345;
  let arr = num.toString().split("");
  let sum = 0;
  for (let digit of arr) {
    sum += +digit;
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/5 №2
{
  let num = 12345;
  let arr = String(num).split("");
  let sum = 0;
  for (let digit of arr) {
    sum += +digit;
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/5 №3
{
  let num = 12345;
  let arr = String(num).split("");
  let sum = 0;
  for (let digit of arr) {
    sum += Number(digit);
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/5 №4
{
  let num = 12345;
  let arr = String(num).split("");
  let sum = "";
  for (let digit of arr) {
    sum = String(Number(sum) + Number(digit));
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/5 №4
{
  let num = 12345;
  let arr = String(num).split("");
  let sum = 0;
  for (let digit of arr) {
    sum += Number(digit);
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/5 №4
{
  let num = 12345;
  let sum = [...num.toString()].reduce((a, d) => a + +d, 0);
  console.log(sum); // -> 15
}

// javascript/training/mistakes/5 №5
{
  let num = 12345;
  let arr = String(num).split("");
  let prod = 1;
  for (let digit of arr) {
    prod *= +digit;
  }
  console.log(prod); // -> 120
}
