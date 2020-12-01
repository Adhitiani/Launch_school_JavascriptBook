function evenOrOdd(number) {
if(Number.isInteger(number) && number % 2 === 0) {
console.log('even');
} else if (Number.isInteger(number) && number % 2 !== 0){
console.log('odd');
} else {
console.log('Sorry, the value you passed is not an integer')
}
}

evenOrOdd()
