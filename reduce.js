const numbers = [1, 2, 3, 4, 5];
const initialValue = 0;
const number = numbers.reduce((first, second) => first + second, initialValue);
console.log(number);
