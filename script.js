let number1 = 10;
let number2 = 5;
let result = 0;
const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".numbers");

const addition = (number1, number2) => {
  result = number1 + number2;
  return result;
};
const subtraction = (number1, number2) => {
  result = number1 - number2;
  return result;
};
const multiplication = (number1, number2) => {
  result = number1 * number2;
  return result;
};
const division = (number1, number2) => {
  result = number1 / number2;
  return result;
};
console.log(addition(number1, number2));
console.log(subtraction(number1, number2));
console.log(multiplication(number1, number2));
console.log(division(number1, number2));

// const displayValue = (numButtons) => {
//   display.textContent = numButtons.value;
// };

numButtons.forEach((button) => {
  button.addEventListener("click", displayValue);
});
console.log(typeof numButtons);
console.log(numButtons);
