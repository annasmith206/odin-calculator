initializeButtonEvents();

let leftNum = "";
let rightNum = "";
let operand = "";

function initializeButtonEvents() {
  const buttons = Array.from(document.querySelectorAll("button"));
  for (let button of buttons) {
    button.addEventListener("click", onClick);
  }
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

function onClick(event) {
  switch (event.target.textContent) {
    case "C":
      clearScreen();
      break;
    case "=":
      calculate();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
        updateOperand(event.target.textContent);
        break;
    default:
        addToEquation(event.target.textContent);
  }
}

function clearScreen() {
  updateScreen("");
  leftNum = "";
  rightNum = "";
  operand = "";
}

function calculate() {
    if (isValidEquation()){
        leftNum = operate(parseFloat(leftNum), parseFloat(rightNum), operand);
        rightNum = "";
        operand = "";
        updateScreen(leftNum);
    }
}

function isValidEquation(){
    return leftNum !== "" && rightNum !== "" && operand !== "";
}

function updateOperand(newOperand) {
    if (leftNum !== "" && operand === "") {
        operand = newOperand;
        updateScreen(buildEquation());
    }
}

function addToEquation(number) {
    if (operand === "") {
        leftNum += number;
    } else {
       rightNum += number;
    }
    updateScreen(buildEquation());
}

function updateScreen(newContent){
    const screen = document.querySelector(".screen");
    screen.textContent = newContent;
}

function buildEquation(){
    return `${leftNum} ${operand} ${rightNum}`;
}
