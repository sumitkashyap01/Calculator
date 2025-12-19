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
  if (op == "+"){
    return addition(num1,num2);
  }
  if (op == "-") {
    return subtract(num1, num2);
  }
  if (op == "x") {
    return multiply(num1, num2);
  }
  if (op == "/") {
    return divide(num1, num2);
  }
}

let num1 = null;
let num2 = null;
let op;

const displaynum = document.querySelector("#screen p");
displaynum.textContent = "";
let storenum = "";
console.log(storenum);
// let storeop;
console.log(op);
let reset_after_operator = false;

const digit = document.querySelectorAll(".digit");
// digit.style.fontSize = "26px";
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
equalbutton.addEventListener("click",() =>{
    let result = operation(op,Number(num1),Number(num2));
    displaynum.textContent = result;
    storenum = result;
});
const resetbutton = document.querySelector(".reset");
resetbutton.addEventListener("click",()=>{
    displaynum.textContent = "";
    storenum = ""
    num1 = "";
    num2 = "";
})

