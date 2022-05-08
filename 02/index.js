// javascript/training/mistakes/2 №1
{
  let arr = [1, 2, 3, 4, 5];
  console.log(arr[arr.length - 1]); // -> 5
}

// javascript/training/mistakes/2 №2
{
  let arr = [1, 2, 3, 4, 5];
  console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]); // -> 15
}

// javascript/training/mistakes/2 №2
{
  let arr = [1, 2, 3, 4, 5];
  /**
   * @param {number[]} numbers
   * @returns {number}
   */
  function findSumOfNumber(numbers) {
    return numbers.reduce((a, n) => a + n, 0);
  }
  console.log(findSumOfNumber(arr)); // -> 15
}

// javascript/training/mistakes/2 №3
{
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.length); // -> 5
}

// javascript/training/mistakes/2 №4
{
  let obj = { a: 1, b: 2, c: 3 };
  console.log(obj["a"]); // -> 1
}

// javascript/training/mistakes/2 №4
{
  let obj = { a: 1, b: 2, c: 3 };
  console.log(obj.a); // -> 1
}

// javascript/training/mistakes/2 №5
{
  let obj = { a: 1, b: 2, c: 3 };
  let key = "a";
  console.log(obj[key]); // -> 1
}

// javascript/training/mistakes/2 №6
{
  let obj = { a: 1, b: 2, c: 3 };
  let sum = obj["a"] + obj["b"] + obj["c"];
  console.log(sum); // -> 6
}

// javascript/training/mistakes/2 №6
{
  let obj = { a: 1, b: 2, c: 3 };
  let sum = obj.a + obj.b + obj.c;
  console.log(sum); // -> 6
}

// javascript/training/mistakes/2 №7
{
  let obj = { a: 1, b: 2, c: 3 };
  console.log(Object.keys(obj).length); // -> 3
}

// javascript/training/mistakes/2 №7
{
  let obj = { a: 1, b: 2, c: 3 };
  console.log(Object.values(obj).length); // -> 3
}

// javascript/training/mistakes/2 №7
{
  let obj = { a: 1, b: 2, c: 3 };
  console.log(Object.entries(obj).length); // -> 3
}
