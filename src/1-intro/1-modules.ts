import * as fs from 'fs';

const textIn = fs.readFileSync('./assets/myTxt.txt', 'utf-8');
const textOut = `This is all we know about apple and bannanas: ${textIn}, Created on ${Date.now()}`
fs.writeFileSync('./assets/output.txt', textOut);
console.log('file written!');
