const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const c = input[0];
const n = Number(input[1]);

let result = "";
let i, j;

if (c === 'A') {
    for (i = 1; i <= n; i++) {
        result += (i + " ");
    }
} else {
    for (j = n; n >= 1; j--) {
        result += (j + " ");
    }
}

console.log(result);