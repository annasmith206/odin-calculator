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

function addToEquation(input) {
    alert(`add ${input} to equation`);
}
