function multiply (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function getNumber (prompt) {
  let rlSyn = require('readline-sync');
  return parseFloat(rlSyn.question(prompt));
  }

let firstNumber = getNumber('Enter the first number: ')
let secondNumber = getNumber('Enter the second Number: ')


console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);