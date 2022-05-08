// javascript/training/mistakes/4 №1
{
  for (let i = 0; i <= 10; i++) {
    console.log(i); // -> 0 1 2 3 4 5 6 7 8 9 10
  }
}

// javascript/training/mistakes/4 №2
{
  for (let i = 10; i >= 0; i--) {
    console.log(i); // -> 10 9 8 7 6 5 4 3 2 1 0
  }
}

// javascript/training/mistakes/4 №3
{
  for (let i = 10; i >= 0; i--) {
    console.log(i); // -> 10 9 8 7 6 5 4 3 2 1 0
  }
}

// javascript/training/mistakes/4 №4
{
  let i = 0;
  while (i <= 10) {
    console.log(i); // -> 0 1 2 3 4 5 6 7 8 9 10
    i++;
  }
}

// javascript/training/mistakes/4 №5
{
  let res = 0;
  for (let i = 1; i <= 10; i++) {
    res += i;
  }
  console.log(res); // -> 55
}

// javascript/training/mistakes/4 №6
{
  let res = 1;
  for (let i = 1; i <= 10; i++) {
    res *= i;
  }
  console.log(res); // -> 3628800
}

// javascript/training/mistakes/4 №7
{
  let arr = ["1", "2", "3", "4", "5"];
  let sum = 0;
  for (let elem of arr) {
    sum += +elem;
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/4 №8
{
  let arr = ["1", "2", "3", "4", "5"];
  let sum = 0;
  for (let elem of arr) {
    sum += +elem;
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/4 №9
{
  let arr = ["1", "2", "3", "4", "5"];
  let sum = 0;
  for (let elem of arr) {
    sum += +elem;
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/4 №10
{
  let arr = ["1", "2", "3", "4", "5"];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/4 №11
{
  let arr = ["1", "2", "3", "4", "5"];
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += +arr[i];
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/4 №12
{
  let arr = ["1", "2", "3", "4", "5"];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  console.log(sum); // -> 15
}

// javascript/training/mistakes/4 №13
{
  let arr = [1, 2, 3, 4, 5];
  let i = 0;
  for (let elem of arr) {
    arr[i++] = elem ** 2;
  }
  console.log(arr); // -> [1, 4, 9, 16, 25]
}

// javascript/training/mistakes/4 №14
{
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    arr.push(i);
  }
  console.log(arr); // -> [1, 2, 3, 4, 5]
}

// javascript/training/mistakes/4 №15
{
  let obj = { a: 1, b: 2, c: 3 };
  let sum = 0;
  for (let elem in obj) {
    sum += obj[elem];
  }
  console.log(sum); // -> 6
}

// javascript/training/mistakes/4 №16
{
  let obj = { a: 1, b: 2, c: 3 };
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  console.log(sum); // -> 6
}

// javascript/training/mistakes/4 №17
{
  let arr = [1, 2, 3, 4, 5];
  let res = "";
  for (let elem of arr) {
    if (elem === 3) {
      res = "+++";
      break;
    }
    res = "---";
  }
  console.log(res); // -> +++
}

// javascript/training/mistakes/4 №18
{
  let arr = [1, 2, 3, 4, 5];
  let res = false;
  for (let elem of arr) {
    if (elem === 3) {
      res = true;
      break;
    }
  }
  console.log(res); // -> true
}

// javascript/training/mistakes/4 №19
{
  let arr = [1, 2, 3, 4, 5];
  for (let elem of arr) {
    if (elem % 2 === 0) {
      console.log(elem); // -> 2 4
    }
  }
}
