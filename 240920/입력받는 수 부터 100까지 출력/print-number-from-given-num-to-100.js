const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let result = "";

for (i = n; i <= 100; i++) {
    result += (i + " ");
}

console.log(result);