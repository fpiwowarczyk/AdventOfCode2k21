function day7(){
    const fs = require('fs')

const fishAges = fs.readFileSync('input.txt','utf8').split(',');
// I need to squeeze size of array 

interface possibleFishAges{
     0: number; 1: number; 2: number; 3: number; 4: number; 5: number; 6: number; 7: number; 8: number; 
}

function squeezeArray(inputArray:number[]): number[] {
    let output = [0,0,0,0,0,0,0,0,0];
    for(let el of inputArray){
        output[el]++;
    }
    return output;
}
let squeezedFishAges = squeezeArray(fishAges);
const days = 256;
console.log(squeezedFishAges);
for(let i = 1; i<=days;i++){
    let fishesToAdd = squeezedFishAges[0]
    let resetTimer = squeezedFishAges[0];
    squeezedFishAges[0] = 0;
    for(let j = 0 ;j<squeezedFishAges.length-1;j++){
        if(j===6){
            squeezedFishAges[j] += squeezedFishAges[j+1] + resetTimer;
            squeezedFishAges[j+1]=0;
        } else {
            squeezedFishAges[j] += squeezedFishAges[j+1]
            squeezedFishAges[j+1]=0;
        }

    }
    if(fishesToAdd){
        squeezedFishAges[squeezedFishAges.length-1] = fishesToAdd;
    }

    console.log(`At day ${i} there is ${squeezedFishAges.reduce((a:number,b:number)=> a+b)}: ${squeezedFishAges}`);
}
}