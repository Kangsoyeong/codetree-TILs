const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

while (true) {

    if (n >= 1000) {
        break;
    }
    if (n % 2 === 0) {
        n = n * 3 + 1;
    }
    else {
        n = n * 2 + 2;
    }

    cnt++
}

console.log(cnt);