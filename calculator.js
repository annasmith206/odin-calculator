initializeButtonEvents();

equation = {
    leftNum: "",
    rightNum: "",
    operand: "",
}

operand = "";
rightNum = "";

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
  alert("clear screen");
}

function calculate() {
  alert("calculate");
}

function updateOperand(operand) {
    if (equation.leftNum !== "" && equation.operand === "") {
        equation.operand = operand;
        updateScreen(buildEquation());
    }
}

function addToEquation(number) {
    if (equation.operand === "") {
        equation.leftNum += number;
    } else {
       equation.rightNum += number;
    }
    updateScreen(buildEquation());
}

function updateScreen(newContent){
    const screen = document.querySelector(".screen");
    screen.textContent = newContent;
}

function buildEquation(){
    return `${equation.leftNum} ${equation.operand} ${equation.rightNum}`;
}
