"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Blocking, synchronous
// LIKE >>>> 1-modules.ts
// Non-blocking, Asynchronous
fs.readFile('./assets/myTxt.txt', 'utf-8', function (err, data) {
    if (err)
        return console.log('ERROR 💥');
    console.log("your file has been read and we found this data: ".concat(data));
    fs.writeFile('./assets/output.txt', "This All we knews: ".concat(data), 'utf-8', function (err) {
        console.log('your file has been written! 😀');
    });
});
console.log('file Reading...');
