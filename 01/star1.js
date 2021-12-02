const input = require('./input.js');

const inputStr = input.data;
const inputArr = inputStr.split('\n');

let answer;

for (let i = 0; i < inputArr.length; i++) {
    let num1 = parseInt(inputArr[i]);

    inputArr.forEach(number => {
        let num2 = parseInt(number);

        if (num1 + num2 === 2020) {
           answer = num1 * num2;
        }
    });
}

console.log(answer);