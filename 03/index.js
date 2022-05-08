// javascript/training/mistakes/3 №2
{
  let num1 = 1;
  let num2 = 2;
  if (num1 + num2 === 3) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №3
{
  let num1 = "1";
  let num2 = "2";
  if (+num1 + +num2 === 3) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №4
{
  let num1 = "1";
  let num2 = "2";
  if (Number(num1) + Number(num2) === 3) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №5
{
  let num = 123;
  if (+num.toString()[0] === 1) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №6
{
  let num = 123;
  if (+String(num)[0] === 1) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №7
{
  let num = 123;
  if (String(num)[0] === "1") {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №7
{
  let num = 123;
  if (String(num)[0] === (1).toString()) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №7
{
  let num = 123;
  if (String(num)[0] === String(1)) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №8
{
  let num = 123;
  let first = +String(num)[0];
  if (first === 1) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №8
{
  let num = 123;
  let first = String(num)[0];
  if (first === "1") {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №9
{
  let num = 12;
  if (num.toString().length === 2) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №9
{
  let num = 12;
  if (String(num).length === 2) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №10
{
  let num = 12;
  let str = num.toString();
  if (str.length === 2) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №10
{
  let num = 12;
  let str = String(num);
  if (str.length === 2) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №10
{
  let num = 12;
  let str = num + "";
  if (str.length === 2) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №11
{
  let num = 12;
  if (String(num).length === 2) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №12
{
  let num = 12;
  if (String(String(num).length) === String(2)) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №12
{
  let num = 12;
  if (String(num).length === 2) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №13
{
  let num = 12;
  if (String(num).length === 2) {
    console.log("+++"); // -> +++
  } else {
    console.log("---");
  }
}

// javascript/training/mistakes/3 №14
{
  let num = "123033";
  let sum1 = +num[0] + +num[1] + +num[2];
  let sum2 = +num[3] + +num[4] + +num[5];
  if (sum1 === sum2) {
    console.log("суммы равны"); // -> суммы равны
  } else {
    console.log("суммы не равны");
  }
}
