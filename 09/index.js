// javascript/training/mistakes/9 №1
let textarea = document.querySelector("textarea");
let div = document.querySelector("div");

textarea.addEventListener("blur", () => {
  div.textContent = textarea.value;
});

// javascript/training/mistakes/9 №2
let checkbox = document.querySelector('input[type="checkbox"]');
let button = document.querySelector("button");
let div = document.querySelector("div");

button.addEventListener("click", () => {
  if (checkbox.checked) {
    div.textContent = "111";
  } else {
    div.textContent = "222";
  }
});

// javascript/training/mistakes/9 №3
let checkbox = document.querySelector('input[type="checkbox"]');
let button = document.querySelector("button");

button.addEventListener("click", () => {
  if (checkbox.checked) {
    console.log("+++");
  } else {
    console.log("---");
  }
});
