const input = require('./input.js');

const map = input.data.split('\n');

// Get map width
const mapWidth = map[0].length;
// Number of trees
let trees = 0;
// Vertical Position
let vPos = 1;
// Horizontal Position
let hPos = 3;

while (vPos < map.length) {
    if (map[vPos][hPos] === '#') {
        trees++;
    }

    vPos++;
    hPos = hPos + 3;
    
    if (hPos > (mapWidth - 1)) {
        hPos = hPos - mapWidth;
    }
}

console.log(`Number of trees: ${trees}`);