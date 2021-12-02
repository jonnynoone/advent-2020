const input = require('./input.js');

const inputStr = input.data;
const inputArr = inputStr.split('\n');

let answer;
let counter = 0;

// loop through once
while(counter < inputArr.length) {
    // grab first number
    let num1 = parseInt(inputArr[counter]);

    // loop through twice
    inputArr.forEach(number => {
        // grab second number
        let num2 = parseInt(number);

        // loop through thrice
        for(let i = 0; i < inputArr.length; i++) {
            // grab third number
            let num3 = parseInt(inputArr[i]);
            
            // check sum of three numbers
            if(num1 + num2 + num3 === 2020) {
                // multiply numbers for answer
                answer = num1 * num2 * num3;
            }
        }
    });

    counter++;
}

console.log(answer);