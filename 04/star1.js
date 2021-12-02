const input = require('./input.js');

const inputStr = input.data;
// Separate data into individual passports 
const passports = inputStr.split('\n\n');

// Replace new lines with spaces
for (let i = 0; i < passports.length; i++) {
    passports[i] = passports[i].replace(/\n/g, ' ');
}

// Explode passport strings into arrays
for (let j = 0; j < passports.length; j++) {
    passports[j] = passports[j].split(' ');
}

// Required fields
const reqFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];

let valid = 0;

passports.forEach(passport => {
    // Check passport has enough fields
    if (passport.length >= 7) {
        let fieldCount = 0;

        for (let k = 0; k < passport.length; k++) {
            // Grab individual passport field
            let ppField = passport[k].split(':');
            
            reqFields.forEach(reqField => {
                // Check field matches required field
                if (reqField === ppField[0]) {
                    fieldCount++;
                }
            });
        }

        if (fieldCount === 7) {
            valid++;
        }
    }
});

console.log(valid);