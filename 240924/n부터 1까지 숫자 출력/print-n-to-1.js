const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
result = "";

while (n >= 1) {
    result += (n + " ");
    n--;
}

console.log(result);