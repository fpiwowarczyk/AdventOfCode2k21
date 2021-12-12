const fs = require('fs');

function isLowest(i:number,j:number,caveArray:any[]){
    let output = true; 
    if(i>0){
        if(caveArray[i][j]>=caveArray[i-1][j]){
            output=  false;
        }
    }
    if(j>0){
        if(caveArray[i][j]>=caveArray[i][j-1]){
            output=  false;
        }
    }
    if(i<lineAmount-1){
        if(caveArray[i][j]>=caveArray[i+1][j]){
            output=  false;
        }
    }
    if(j<lineLength){
        if(caveArray[i][j]>=caveArray[i][j+1]){
            output =  false;
        }
    }
    
    if(output){
        console.log(i,j)
        console.log(`--------\n\r  ${i>0?caveArray[i-1][j]:" "} \n ${j>0?caveArray[i][j-1]:" "}${caveArray[i][j]}${j<lineLength?caveArray[i][j+1]:" "} \n \r  ${i<(lineAmount-1)?caveArray[i+1][j]:" "}\n--------`)                                                   
    }

    return output;
}

function getPoint(i:number,j:number,caveArray:any[]){
    console.log(`Point at ${i},${j} value: ${caveArray[i][j]}`)
}

const caves = fs.readFileSync('input.txt','utf8').split("\r\n");
let caveArray = []
let i =0;
let lineLength:number,lineAmount:number;
for(let caveLine of caves){
    caveArray[i] = caveLine.split('');
    i++;
}
let riskLevel = 0
lineLength = caveArray[0].length;
lineAmount = caveArray.length;
let output = []
for(let i in caveArray){
    for( let j in caveArray[i]){
        if(isLowest(Number(i),Number(j),caveArray)){
            riskLevel += Number(caveArray[i][j])+1
            output.push(caveArray[i][j])
        };
    }
}

console.log(output);
let sum = 0;
for(let point of output){
    console.log(point);
    sum += Number(point)+1;
}

console.log(sum);
console.log(riskLevel);