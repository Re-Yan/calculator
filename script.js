let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let operatorSign = null;
let clearCurrentOperation = false;
let clearOperationLine = false;

const display = document.querySelector(".display");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);
const operationLine = document.getElementById("operationLine");
const numButtons = document.querySelectorAll("[data-number]");
const operatorArray = document.querySelectorAll("[data-operator");
const buttonArray = document.querySelectorAll(".btn");
const decimal = document.getElementById("decimalPoint");
const equalSign = document.getElementById("equals");
const clear = document.getElementById("clear");

const operate = (number1, sign, number2) => {
  num1 = Number(number1);
  num2 = Number(number2);

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

  switch (sign) {
    case "÷": {
      return divide(num1, num2);
    }
    case "x": {
      return multiply(num1, num2);
    }
    case "+": {
      return add(num1, num2);
    }
    case "-": {
      return subtract(num1, num2);
    }
  }
};

const reset = () => {
  currentOperationScreen.textContent = "";
  clearCurrentOperation = false;
};

function insertNumber(number) {
  if (clearCurrentOperation === true) reset();
  if (clearOperationLine === true) {
    operationLine.textContent = "";
    clearOperationLine = false;
  }
  currentOperationScreen.textContent += number;
}
function secondOperation() {
  if (operatorSign === null || clearCurrentOperation) return;

  secondNumber = currentOperationScreen.textContent;
  currentOperationScreen.textContent = operate(
    firstNumber,
    operatorSign,
    secondNumber
  );
  operationLine.textContent = `${firstNumber} ${operatorSign} ${secondNumber}`;
  operatorSign = null;
}

function pickOperator(operator) {
  if (operatorSign !== null) secondOperation();

  operatorSign = operator;
  firstNumber = currentOperationScreen.textContent;
  operationLine.textContent = `${firstNumber} ${operatorSign}`;
  clearCurrentOperation = true;
  clearOperationLine = false;
}

buttonArray.forEach((button) => {
  button.addEventListener("mouseover", function () {
    console.log("a button has been hovered");
    //insert blur effect here
  });
});

numButtons.forEach((button) => {
  button.addEventListener("click", () => insertNumber(button.textContent));
  reset();
});

operatorArray.forEach((button) => {
  button.addEventListener("click", () => pickOperator(button.textContent));
});

clear.addEventListener("click", function () {
  reset();
  operationLine.textContent = "";
});

equalSign.addEventListener("click", function () {
  secondOperation();
  clearCurrentOperation = true;
  clearOperationLine = true;
});
