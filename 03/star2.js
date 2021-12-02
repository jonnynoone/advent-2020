const input = require('./input.js');

const map = input.data.split('\n');

// Get map width
const mapWidth = map[0].length;
// Number of trees
let trees = 0;
let treesArr = [];
// Vertical Position
let vPos = 0;
// Horizontal Position
let hPos = 0;

// Vertical Increment
let vInc = [1, 1, 1, 1, 2];
// Horizontal Increment
let hInc = [1, 3, 5, 7, 1];

for (let i = 0; i < vInc.length; i++) {
    while (vPos < map.length) {
        if (map[vPos][hPos] === '#') {
            console.log(vPos, hPos);
            trees++;
        }
    
        vPos = vPos + vInc[i];
        hPos = hPos + hInc[i];
        
        if (hPos > (mapWidth - 1)) {
            hPos = hPos - mapWidth;
        }
    }

    // Record number of trees
    treesArr.push(trees)

    // Reset counters
    vPos = 0;
    hPos = 0;
    trees = 0;
}

// Multiply all results for final answer
let answer = treesArr[0];
for (let j = 1; j < treesArr.length; j++) {
    answer = answer * treesArr[j];
}

console.log(`Record of trees: ${treesArr}`);
console.log(`Final answer: ${answer}`);