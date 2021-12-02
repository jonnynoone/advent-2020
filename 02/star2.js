const input = require('./input.js');

const inputStr = input.data;
const inputArr = inputStr.split('\n');

let valid = 0;

inputArr.forEach(line => {
    let lineArr = line.split(' ');

    // Get char positions adjusted for zero index
    let positions = lineArr[0].split('-');
    let pos1 = parseInt(positions[0]) - 1;
    let pos2 = parseInt(positions[1]) - 1;

    // Get policy letter
    let policyLetter = lineArr[1][0];

    // Get password
    let password = lineArr[2];

    let count = 0;
    // Check char positions for policy letter
    if (password[pos1] === policyLetter) {
        count++;
    }
    if (password[pos2] === policyLetter) {
        count++;
    }

    // Check if valid
    if (count === 1) {
        valid++;
    }
});

console.log(`Valid passwords: ${valid}`);