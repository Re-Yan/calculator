let number1 = 10;
let number2 = 5;
let result = 0;

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
