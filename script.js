let number1 = 0;
let number2 = 0;
let result = 0;
let operatorSign = "";
let secondNumEval = false;

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

const operate = (num1, num2) => {
  if (operatorSign === "/") divide(num1, num2);
  else if (operatorSign === "x") multiply(num1, num2);
  else if (operatorSign === "+") add(num1, num2);
  else if (operatorSign === "-") subtract(num1, num2);
};

const displayResult = () => {
  operate(number1, number2);
  operationLine.textContent += result;
};

const reset = () => {
  number1 = 0;
  number2 = 0;
  result = 0;
  secondNumEval = false;
  currentOperation.textContent = "";
  operationLine.textContent = "";
};

let temporarySign = "";
let tempNumber = "";

//function for the operator buttons
operatorArray.forEach((button) => {
  button.addEventListener("click", function () {
    switch (secondNumEval) {
      case false: {
        number1 = Number(tempNumber);
        tempNumber = "";
        temporarySign = button.textContent;
        secondNumEval = true;
        break;
      }
      case true: {
        number2 = Number(tempNumber);
        tempNumber = "";
        secondNumEval = false;
        displayResult();

        break;
      }
    }
    currentOperation.textContent += button.textContent;

    operatorSign = button.textContent;
    switch (operatorSign) {
      case "=": {
        operatorSign = temporarySign;
        displayResult();
        break;
      }
      default: {
        operatorSign = button.textContent;
        temporarySign = operatorSign;
      }
    }
    // console.log(operatorSign);
  });
});

// function for the number keypad
numButtons.forEach((button) => {
  button.addEventListener("click", function () {
    switch (secondNumEval) {
      case false: {
        tempNumber += button.textContent;
        currentOperation.textContent += button.textContent;
        break;
      }
      case true: {
        tempNumber += button.textContent;
        currentOperation.textContent += button.textContent;
        break;
      }
    }
  });
});

equalSign.addEventListener("click", function () {
  //roadblock: the equal sign needs to be separated from the operator Array in order to function properly
});

operationLine.textContent = "";
currentOperation.textContent = "";

clear.addEventListener("click", function () {
  reset();
});
