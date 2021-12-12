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

    return output;
}

function findBasins(i:number,j:number,caveArray:any[],output:number):number{
    let current = Number(caveArray[i][j]);
    if(current === 9){
        return output;
    }
    output++;
    if(i>0 && current === (Number(caveArray[i-1][j]) - 1)){
        output += findBasins(i-1,j,caveArray,output);
    }
    if(i<lineAmount-1 && current === (Number(caveArray[i+1][j]) - 1)){
        output += findBasins(i+1,j,caveArray,output);
    }
    if(j > 0 && current === (Number(caveArray[i][j-1]) - 1)){
        output += findBasins(i,j-1,caveArray,output);
    }
    if(j<lineLength && current === (Number(caveArray[i][j+1]) - 1)){
        output += findBasins(i,j+1,caveArray,output);
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
let basins = []
lineLength = caveArray[0].length;
lineAmount = caveArray.length;
let output = []
for(let i in caveArray){
    for( let j in caveArray[i]){
        if(isLowest(Number(i),Number(j),caveArray)){
            riskLevel += Number(caveArray[i][j])+1
            basins.push(findBasins(Number(i),Number(j),caveArray,0))
        };
    }
}



console.log(`Sum of risk levels: ${riskLevel}`);

console.log(basins);