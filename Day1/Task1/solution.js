const lineByLine = require('n-readlines');
const liner  = new lineByLine('input.txt');

let line;
let result = 0;
let lastRead;

while(line = liner.next()){
    let number = Number(line.toString());
    if(number > lastRead && lastRead){
        result +=1;
    }
    lastRead = number;
}

console.log(result);