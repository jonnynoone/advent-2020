const input = require('./input.js');

const inputStr = input.data;
const inputArr = inputStr.split('\n');

for (let i = 0; i < inputArr.length; i++) {
    let num1 = parseInt(inputArr[i]);

    inputArr.forEach(number => {
        let num2 = parseInt(number);

        if (num1 + num2 === 2020) {
            console.log(num1 * num2);
        }
    });
}