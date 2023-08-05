let number1 = 0;
let number2 = 0;
let result = 0;
let temporarySign = "";
let tempNumber = "";
let operatorSign = "";
let clearCurrentOperation = false;
let resetNumber = false;

const display = document.querySelector(".display");
const currentOperation = document.getElementById("currentOperation");
const operationLine = document.getElementById("operationLine");
const numButtons = document.querySelectorAll(".numbers");
const operatorArray = document.querySelectorAll(".operator");
const division = document.getElementById("divide");
const multiplication = document.getElementById("multiply");
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const decimal = document.getElementById("decimalPoint");
const equalSign = document.getElementById("equals");
const clear = document.getElementById("clear");
const multiplyButton = document.getElementById("multiply");

const add = (number1, number2) => {
  return (result = number1 + number2);
};
const subtract = (number1, number2) => {
  return (result = number1 - number2);
};
const multiply = (number1, number2) => {
  return (result = number1 * number2);
};
const divide = (number1, number2) => {
  return (result = number1 / number2);
};

const operate = (number1, number2) => {
  switch (operatorSign) {
    case "/": {
      divide(number1, number2);
      break;
    }
    case "x": {
      multiply(number1, number2);
      break;
    }
    case "+": {
      add(number1, number2);
      break;
    }
    case "-": {
      subtract(number1, number2);
      break;
    }
  }
};

const displayResult = () => {
  operate(number1, number2);
  operationLine.textContent += result;
};

const reset = () => {
  number1 = 0;
  number2 = 0;
  result = 0;
  clearCurrentOperation = false;
  operatorSign = "";
  currentOperation.textContent = "";
  operationLine.textContent = "";
};

//function for the operator buttons
operatorArray.forEach((button) => {
  button.addEventListener("click", function () {
    clearCurrentOperation = true;
    if (operationLine.textContent === "") {
      number1 = Number(tempNumber);
      tempNumber = "";
      temporarySign = button.textContent;
      operationLine.textContent += `${number1} ${temporarySign} `;
    } else if (operationLine.textContent !== "") {
      number2 = Number(tempNumber);
      tempNumber = "";
      currentOperation.textContent = "";
      operate(number1, number2);
      operationLine.textContent += `${number2} ${button.textContent} `;
      currentOperation.textContent = `${result}`;
      number1 = result;
    }

    operatorSign = button.textContent;
  });
});

// function for the number keypad
numButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // write a condition that checks if the operator buttons are clicked
    if (operatorSign === "=") {
      reset();
    }

    if ((number1 || number2) && clearCurrentOperation === true) {
      clearCurrentOperation = false;
      currentOperation.textContent = "";
    }

    tempNumber += button.textContent;
    currentOperation.textContent += button.textContent;

    // if (operationLine.textContent === "") {
    //   tempNumber += button.textContent;
    //   currentOperation.textContent += button.textContent;
    // } else if (number1 || number2) {
    //   // currentOperation.textContent = "";
    //   tempNumber += button.textContent;
    //   currentOperation.textContent += button.textContent;
    // }

    // tempNumber += button.textContent;
    // currentOperation.textContent += button.textContent;
  });
  // add in a condition that if an operator sign exists in the operation line, clear the currentOperation number and replace with a new one
});

equalSign.addEventListener("click", function () {});

operationLine.textContent = "";
currentOperation.textContent = "";

clear.addEventListener("click", function () {
  reset();
});
