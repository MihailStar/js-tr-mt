// javascript/training/mistakes/1 №1
{
  let num1 = 1;
  let num2 = 2;
  console.log(`сумма: ${num1 + num2}`); // -> сумма: 3
}

// javascript/training/mistakes/1 №2
{
  let a = 1;
  let b = 2;
  console.log(a + b); // -> 3
}

// javascript/training/mistakes/1 №2
{
  let a = 1;
  let b = 2;
  let c = 3;
  console.log(a + b + c); // -> 6
}

// javascript/training/mistakes/1 №3
{
  let num = "123";
  let sum = +num[0] + +num[1] + +num[2];
  console.log(sum); // -> 6
}

// javascript/training/mistakes/1 №3
{
  let num = "123";
  let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
  console.log(sum); // -> 6
}

// javascript/training/mistakes/1 №3
{
  let num = "123";
  let sum =
    Number.parseInt(num[0], 10) +
    Number.parseInt(num[1], 10) +
    Number.parseInt(num[2], 10);
  console.log(sum); // -> 6
}

// javascript/training/mistakes/1 №3
{
  let num = "123";
  let sum = parseInt(num[0], 10) + parseInt(num[1], 10) + parseInt(num[2], 10);
  console.log(sum); // -> 6
}

// javascript/training/mistakes/1 №3
{
  let num = "123";
  /**
   * @param {string|number} n positive integer
   * @returns {number}
   */
  function findSumDigitsOfNumber(n) {
    return [...n.toString()].reduce((a, d) => a + +d, 0);
  }
  console.log(findSumDigitsOfNumber(num)); // -> 6
}

// javascript/training/mistakes/1 №4
{
  let num = 123;
  console.log(num.toString()[0]); // -> 1
}

// javascript/training/mistakes/1 №5
{
  let a = 0;
  console.log(++a); // -> 1
}

// javascript/training/mistakes/1 №5
{
  let a = 0;
  console.log((a += 1)); // -> 1
}

// javascript/training/mistakes/1 №6
{
  let num = 123;
  console.log(num.toString().length); // -> 3
}

// javascript/training/mistakes/1 №7
{
  const SECONDS_IN_DAY = 24 * 60 * 60;
  console.log(SECONDS_IN_DAY); // -> 86400
}

// javascript/training/mistakes/1 №8
{
  let num = 123;
  let str = String(num);
  console.log(str.length); // -> 3
}

// javascript/training/mistakes/1 №9
{
  let num = 123;
  let str = String(num);
  console.log(str[str.length - 1]); // -> 3
}

// javascript/training/mistakes/1 №10
{
  let num = 123;
  let str = String(num);
  console.log(str.length); // -> 3
}

// javascript/training/mistakes/1 №11
{
  let num = 123;
  let str = String(num);
  console.log(str[str.length - 1]); // -> 3
}

// javascript/training/mistakes/1 №12
{
  let a = "123";
  let b = "456";
  let s = Number(a) + Number(b);
  console.log(s); // -> 579
}

// javascript/training/mistakes/1 №13
{
  let aaa = 1;
  let bbb = 2;
  let ccc = 3;
  console.log(aaa + bbb + ccc); // -> 6
}
