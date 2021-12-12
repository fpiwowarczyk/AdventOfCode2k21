// Unique values 
// 2 digits - 1
// 4 digits - 4 
// 3 digits - 7
// 7 digits - 8
// Others 
// 6 digits - 0 
// 5 digits - 2 
// 5 digits - 3
// 5 digits - 5 
// 6 digits - 6
// 6 digits - 9
// COunt apperances of these numpers in output --> after | 
const fs = require('fs');

function findUnique(str1:string,str2:string){
    let concat = str1+str2;
    let uniq = '';
    
    for(let i = 0;i<str1.length;i++){
        if(uniq.includes(concat[i]) === false){
            uniq += concat[i]
        } 
    }
    return uniq;
}

function calculateDifference(str1:string,str2:string){
    //Return characters that have str1 but str2 dont
    for(let character of str2){
        if(str1.includes(character)){
            str1 = str1.replace(character,"");
            
        }
    }
    return str1;
}

function includesAllCharacters(str1:string, str2:string){

    for(const character of str2){
        if(!str1.includes(character)){
            return false;
        }
    }
    return true;
}

function countMissingCharacters(str1:string,str2:string){
    let output = 0
    for(const character of str2){
        if(!str1.includes(character)){
            output++;
        }
    }
    return output;
}

function sameLengthAndCharactersDifferentOrder(str1:string, str2:string){
    if(str1.length !== str2.length){
        return false;
    }
    for(const character of str2){
        if(!str1.includes(character)){
            return false;
        }
    }
    return true;
}
const signals = fs.readFileSync('input.txt','utf8').split('\n');
let sum =0;
for(const line of signals){
    let zero:string;
    let one:string;
    let two:string;
    let three:string;
    let four:string;
    let five:string;
    let six:string;
    let seven:string;
    let eight:string;
    let nine:string;
    let sigAndOutput = line.split('|')
    let sig = sigAndOutput[0];
    let output = sigAndOutput[1];
    let numbers = sig.split(' ')
    
    one = numbers[numbers.findIndex((el:string) => el.length === 2)];
    three = numbers[numbers.findIndex((el:string) => el.length == 5 &&includesAllCharacters(el,one))]
    nine = numbers[numbers.findIndex((el:string)=> el.length===6 && includesAllCharacters(el,three))]
    zero = numbers[numbers.findIndex((el:string) => el.length == 6 && el!== nine && includesAllCharacters(el,one))]

    four = numbers[numbers.findIndex((el:string) => el.length === 4)];
    seven = numbers[numbers.findIndex((el:string) => el.length === 3)];
    eight = numbers[numbers.findIndex((el:string) => el.length === 7)];

    six = numbers[numbers.findIndex((el:string)=> el.length===6 && el!== nine && el!==zero)]
    five = numbers[numbers.findIndex((el:string)=> el.length===5 &&el!=three&& countMissingCharacters(el,four) === 1)]
    two = numbers[numbers.findIndex((el:string)=> el.length===5 && el!== five && el !== three)]
    
    const calculatedNumbers = [zero,one,two,three,four,five,six,seven,eight,nine];
    let outputNumbers = output.split(' ');
    let numberToAdd = ''
    for(const nr of outputNumbers){
        const index = calculatedNumbers.findIndex((el:string) => sameLengthAndCharactersDifferentOrder(el,nr.replace('\r','')))
        if(index !== -1){
        numberToAdd += index;
        }
        
    }
    sum += Number(numberToAdd);
}

console.log(`Sum is: ${sum}`)
