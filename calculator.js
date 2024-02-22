initializeButtonEvents();

function initializeButtonEvents(){
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
    alert(`clicked ${event.target.textContent}`)
}