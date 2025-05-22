import * as fs from 'fs';

// Blocking, synchronous
// LIKE >>>> 1-modules.ts


// Non-blocking, Asynchronous
fs.readFile('./assets/myTxt.txt', 'utf-8', (err, data) => {
    if(err) return console.log('ERROR 💥')
    console.log(`your file has been read and we found this data: ${data}`);
    fs.writeFile('./assets/output.txt',`This All we knews: ${data}`, 'utf-8', err => {
        console.log('your file has been written! 😀')
    });
})
   
console.log('file Reading...')