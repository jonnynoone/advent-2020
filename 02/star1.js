const input = require('./input.js');

const inputStr = input.data;
const inputArr = inputStr.split('\n');

let valid = 0;

inputArr.forEach(line => {
    let lineArr = line.split(' ');

    // Get min and max policy number
    let instances = lineArr[0].split('-');
    let numMin = parseInt(instances[0]);
    let numMax = parseInt(instances[1]);

    // Get policy letter
    let policyLetter = lineArr[1][0];

    // Get password
    let password = lineArr[2];

    let count = 0;
    // Iterate through password chars
    for (let i = 0; i < password.length; i++) {
        // Check if password char matches policy char
        if (password[i] === policyLetter) {
            count++;
        }
    }

    // Check if valid
    if (count >= numMin && count <= numMax) {
        valid++;
    }
});

console.log(`Valid passwords: ${valid}`);