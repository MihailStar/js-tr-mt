// javascript/training/mistakes/8 №1
{
  let elems = document.querySelectorAll("p");

  elems.forEach((elem) => {
    elem.textContent += "!";
  });
}

// javascript/training/mistakes/8 №2
{
  let elems = document.querySelectorAll("p");

  elems.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.target.textContent = `${+event.target.textContent + 1}`;
    });
  });
}

// javascript/training/mistakes/8 №2
{
  let elems = document.querySelectorAll("p");

  elems.forEach((elem) => {
    elem.addEventListener("click", function () {
      this.textContent = `${+this.textContent + 1}`;
    });
  });
}

// javascript/training/mistakes/8 №3
{
  let button = document.querySelector("button");
  let elem = document.querySelector("p");

  button.addEventListener("click", () => {
    elem.innerHTML = `<b>${elem.textContent}</b>`;
  });
}

// javascript/training/mistakes/8 №4
{
  let button = document.querySelector("button");
  let elems = document.querySelectorAll("p");

  button.addEventListener("click", () => {
    let sum = 0;

    elems.forEach((elem) => {
      sum += Number(elem.textContent);
    });

    console.log(sum);
  });
}

// javascript/training/mistakes/8 №4
{
  let button = document.querySelector("button");
  let elems = [...document.querySelectorAll("p")];

  button.addEventListener("click", () => {
    let sum = elems.reduce((acc, { textContent }) => acc + +textContent, 0);

    console.log(sum);
  });
}

// javascript/training/mistakes/8 №5
{
  let elems = document.querySelectorAll("p");

  for (let elem of elems) {
    elem.addEventListener("click", function () {
      this.textContent += "!";
    });
  }
}

// javascript/training/mistakes/8 №6
{
  let button = document.querySelector("button");
  let elems = document.querySelectorAll("p");

  button.addEventListener("click", () => {
    for (let elem of elems) {
      elem.innerHTML = "<b>" + elem.textContent + "</b>";
    }
  });
}

// javascript/training/mistakes/8 №7
{
  let button = document.querySelector("button");
  let elems = document.querySelectorAll("p");
  let sum = 0;

  for (let elem of elems) {
    sum += +elem.textContent;
  }

  button.addEventListener("click", () => {
    console.log(sum);
  });
}

// javascript/training/mistakes/8 №8
{
  let button = document.querySelector("button");
  let elems = document.querySelectorAll("input");

  button.addEventListener("click", () => {
    let sum = 0;

    for (let elem of elems) {
      sum += +elem.value;
    }

    console.log(sum);
  });
}

// javascript/training/mistakes/8 №9
{
  let btn = document.querySelector("#btn");
  let inp1 = document.querySelector("#inp1");
  let inp2 = document.querySelector("#inp2");
  let inp3 = document.querySelector("#inp3");

  btn.addEventListener("click", () => {
    inp3.value = +inp1.value + +inp2.value;
  });
}

// javascript/training/mistakes/8 №10
{
  let btn = document.querySelector("#btn");
  let res = document.querySelector("#res");
  let inp1 = document.querySelector("#inp1");
  let inp2 = document.querySelector("#inp2");

  btn.addEventListener("click", () => {
    res.textContent = +inp1.value + +inp2.value;
  });
}

// javascript/training/mistakes/8 №11
{
  let inputs = document.querySelectorAll("input");
  let button = document.querySelector("#btn");

  button.addEventListener("click", () => {
    for (let input of inputs) {
      if (input.value === input.dataset.text) {
        input.classList.add("right");
        input.classList.remove("wrong");
      } else {
        input.classList.add("wrong");
        input.classList.remove("right");
      }
    }
  });
}

// javascript/training/mistakes/8 №12
{
  let inputs = document.querySelectorAll("input");
  let button = document.querySelector("#btn");

  let texts = ["text1", "text2", "text3"];

  button.addEventListener("click", () => {
    inputs.forEach((input, index) => {
      if (input.value === texts[index]) {
        input.classList.add("right");
        input.classList.remove("wrong");
      } else {
        input.classList.add("wrong");
        input.classList.remove("right");
      }
    });
  });
}

// javascript/training/mistakes/8 №13
{
  let inputs = document.querySelectorAll("input");
  let btn = document.querySelector("#btn");

  btn.addEventListener("click", () => {
    let sum = 0;

    for (let input of inputs) {
      sum += Number(input.value);
    }

    console.log(sum);
  });
}

// javascript/training/mistakes/8 №14
{
  let btn = document.querySelector("#btn");
  let inp1 = document.querySelector("#inp1");
  let inp2 = document.querySelector("#inp2");
  let inp3 = document.querySelector("#inp3");

  btn.addEventListener("click", () => {
    let sum = +inp1.value + +inp2.value;

    inp3.value = sum;
  });
}

// javascript/training/mistakes/8 №15
{
  let inp = document.querySelector("#inp");

  inp.addEventListener("blur", () => {
    let digits = inp.value.split("").map(Number);
    let sum = 0;

    for (let digit of digits) {
      sum += digit;
    }

    console.log(sum);
  });
}
