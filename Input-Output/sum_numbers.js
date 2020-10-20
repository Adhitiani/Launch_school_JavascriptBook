let rlSyncs = require('readline-sync');
let number1 = Number(rlSyncs.question("Enter the first number\n"));
let number2 = Number(rlSyncs.question("Enter the second number\n"));
let sum = number1 + number2
console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

let rlSyncs2 = require('readline-sync');
let question1 = Number(rlSyncs2.question("What is your birth date?\n"));
let question2 = Number(rlSyncs2.question('What is your birth month?\n'));
let birthSum = question1 + question2
console.log(`Your birth date ${question1} and your birth month ${question2} add to ${birthSum}`);