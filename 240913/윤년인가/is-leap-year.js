const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const y = Number(input);

if ((y % 4 !== 0) || (y % 100 === 0 && y % 400 !== 0) ) {
    console.log("false");
} else {
    console.log("true");
}