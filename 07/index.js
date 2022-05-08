// javascript/training/mistakes/7 №1
console.log(isPrime(13)); // -> true

function isPrime(num) {
  for (let divider = 2; divider < num; divider++) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
}

// javascript/training/mistakes/7 №2
console.log(isFriendly(220, 284)); // -> true

function isFriendly(num1, num2) {
  let sum1 = getSum(getOwnDivisors(num1));
  let sum2 = getSum(getOwnDivisors(num2));

  if (sum1 === sum2) {
    return true;
  }

  return false;
}

function getOwnDivisors(num) {
  let res = [];

  for (let d = 0; d <= num; d++) {
    if (num % d === 0) {
      res.push(d);
    }
  }

  return res;
}

function getSum(arr) {
  return arr.reduce((a, n) => a + n, 0);
}
