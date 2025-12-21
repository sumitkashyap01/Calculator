function addition(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operation(op, num1, num2) {
  if (op == "+") {
    return addition(num1, num2);
  }
  if (op == "-") {
    return subtract(num1, num2);
  }
  if (op == "x" || op == "*") {
    return multiply(num1, num2);
  }
  if (op == "/") {
    return divide(num1, num2);
  }
}

let num1 = null;
let num2 = null;
let op = null;

const displaynum = document.querySelector("#screen p");
displaynum.textContent = "";
let storenum = "";
console.log(storenum);
console.log(op);
let reset_after_operator = false;

const digit = document.querySelectorAll(".digit");
digit.forEach((bt) => {
  bt.addEventListener("click", () => {
    if (reset_after_operator) {
      storenum = "";
    }
    reset_after_operator = false;
    storenum = storenum + bt.textContent;
    displaynum.textContent = storenum;
    if (num1 != null) {
      num2 = storenum;
    }
    console.log(num1, num2);
  });
});
const operatorButton = document.querySelectorAll(".operator");
operatorButton.forEach((storeop) => {
  storeop.addEventListener("click", () => {
    op = storeop.textContent;
    num1 = storenum;
    reset_after_operator = true;
  });
});
const equalbutton = document.querySelector(".equal");
equalbutton.addEventListener("click", () => {
  let result = operation(op, Number(num1), Number(num2));
  displaynum.textContent = result;
  storenum = result;
});
const resetbutton = document.querySelector(".reset-btn");
resetbutton.addEventListener("click", () => {
  displaynum.textContent = "";
  storenum = "";
  num1 = null;
  num2 = null;
});

addEventListener("keydown", (event) => {
  
  if (event.key >= "0" && event.key <= "9") {
    if (reset_after_operator) {
      storenum = "";
      reset_after_operator = false;
    }
    storenum = storenum + event.key;
    console.log(event.key);
  }
  displaynum.textContent = storenum;
  if (num1 != null) {
    num2 = storenum;
  }

  if (
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/"
  ) {
    op = event.key;
    num1 = storenum;
    reset_after_operator = true;
    console.log(event.key);
  }

  if (event.key == "=" || event.key == "Enter") {
    let result = operation(op, Number(num1), Number(num2));
    displaynum.textContent = result;
    storenum = String(result);

  }

  if (event.key == "Backspace") {
    displaynum.textContent = "";
    storenum = "";
    num1 = null;
    num2 = null;
  }
});
