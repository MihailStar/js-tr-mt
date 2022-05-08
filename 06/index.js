// javascript/training/mistakes/6 №1
{
  function func1() {
    const result = 3;
    console.log(result); // -> 3
    return result;
  }
  function func2() {
    const result = 5;
    console.log(result); // -> 5
    return result;
  }
  console.log(func1() + func2()); // -> 8
}

// javascript/training/mistakes/6 №2
{
  function sum(arr) {
    let res = 0;
    for (let elem of arr) {
      res += elem;
    }
    return res;
  }
  console.log(sum([1, 2, 3, 4, 5])); // -> 15
}

// javascript/training/mistakes/6 №3
{
  let arr = [1, 2, 3, 4, 5];
  function func(arr) {
    let res = 0;
    for (let elem of arr) {
      res += elem;
    }
    console.log(res); // -> 15
    return res;
  }
  console.log(func([1, 2, 3, 4, 5])); // -> 15
}

// javascript/training/mistakes/6 №4
{
  function func1() {
    return 3;
  }
  function func2() {
    return 5;
  }
  console.log(func1() + func2()); // -> 8
}

// javascript/training/mistakes/6 №5
{
  let sum = getSum([1, 2, 3, 4, 5]);
  console.log(sum); // -> 15
  function getSum(arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem;
    }
    return sum;
  }
}

// javascript/training/mistakes/6 №6
{
  let res = sum([1, 2, 3, 4, 5]);
  console.log(res); // -> 15
  function sum(arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem;
    }
    return sum;
  }
}

// javascript/training/mistakes/6 №7
{
  function add(num) {
    if (num <= 9) {
      return "0" + num;
    }
    return "" + num;
  }
  [1, 5, 9, 10].forEach((n) => console.log(add(n))); // -> 01 05 09 10
}

// javascript/training/mistakes/6 №8
{
  let arr = [1, 2, 3, 4, 5];
  let sum = getSum(arr);
  console.log(sum); // -> 15
  function getSum(arr) {
    let res = 0;
    for (let elem of arr) {
      res += elem;
    }
    return res;
  }
}

// javascript/training/mistakes/6 №9
{
  let num = 12345;
  let res = getDigitsSum(num);
  console.log(res); // -> 15
  function getDigitsSum(num) {
    let arr = num.toString().split("");
    let sum = 0;
    for (let elem of arr) {
      sum += +elem;
    }
    return sum;
  }
}
