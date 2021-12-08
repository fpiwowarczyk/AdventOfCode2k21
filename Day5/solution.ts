const fs = require('fs');

let input = fs.readFileSync('input.txt','utf8').split('\n');
let coords = []

function convertToCoordsPair(line:String){
    let lineParts = line.split(',');
    let secondParts=  lineParts[1].split(' -> ');
    return {x1:Number(lineParts[0]),y1: Number(secondParts[0]), x2: Number(secondParts[1]),y2: Number(lineParts[2])}
}
for(let line of input){
    coords.push(convertToCoordsPair(line));
}
let coveredPoints = []
// Spaghetti <3
let index = 0;
for(let pair of coords){
    if(pair.x1 === pair.x2 || pair.y1 === pair.y2){
        if(pair.x1 !== pair.x2){
            if(pair.x1 < pair.x2){
                for(let i = pair.x1;i<=pair.x2;i++){
                    const indexOfPossibleVal = coveredPoints.findIndex(el => el.x === i && el.y === pair.y1);
                    if(indexOfPossibleVal!== -1){
                        coveredPoints[indexOfPossibleVal].cover++;
                    } else {
                        coveredPoints.push({x:i,y:pair.y1,cover:1});
                    }
                }
            } else { 
                for(let i = pair.x2;i<=pair.x1;i++){
                    const indexOfPossibleVal = coveredPoints.findIndex(el => el.x === i && el.y === pair.y1);
                    if(indexOfPossibleVal!== -1){
                        coveredPoints[indexOfPossibleVal].cover++;
                    } else {
                        coveredPoints.push({x:i,y:pair.y1,cover:1});
                    }
                }
            }
    
        } else {
            if(pair.y1<pair.y2){
                for(let i = pair.y1;i<=pair.y2;i++){
                    const indexOfPossibleVal = coveredPoints.findIndex(el => el.x === pair.x1 && el.y === i);
                    if(indexOfPossibleVal!== -1){
                        coveredPoints[indexOfPossibleVal].cover++;
                    } else {
                        coveredPoints.push({x:pair.x1,y:i,cover:1});
                    }
                }
            } else {
                for(let i = pair.y2;i<=pair.y1;i++){
                    const indexOfPossibleVal = coveredPoints.findIndex(el => el.x === pair.x1 && el.y === i);
                    if(indexOfPossibleVal!== -1){
                        coveredPoints[indexOfPossibleVal].cover++;
                    } else {
                        coveredPoints.push({x:pair.x1,y:i,cover:1});
                    }
                }
            }
    
        }
    } else {
        if (pair.x1 > pair.x2){
            if (pair.y1 > pair.y2){
                for(let i = 0;i<= pair.x1-pair.x2;i++){
                    const indexOfPossibleVal = coveredPoints.findIndex(el => el.x === pair.x1-i && el.y === pair.y1-i);
                    if(indexOfPossibleVal!== -1){
                        coveredPoints[indexOfPossibleVal].cover++;
                    } else {
                        coveredPoints.push({x:pair.x1-i,y:pair.y1-i,cover:1});
                    }
                }
            } else {
                for(let i = 0;i<= pair.x1-pair.x2;i++){
                    const indexOfPossibleVal = coveredPoints.findIndex(el => el.x === pair.x1-i && el.y === pair.y1+i);
                    if(indexOfPossibleVal!== -1){
                        coveredPoints[indexOfPossibleVal].cover++;
                    } else {
                        coveredPoints.push({x:pair.x1-i,y:pair.y1+i,cover:1});
                    }
                }
            }
        } else {
            if (pair.y1 > pair.y2){
                for(let i = 0;i<= pair.x2-pair.x1;i++){
                    const indexOfPossibleVal = coveredPoints.findIndex(el => el.x === pair.x1+i && el.y === pair.y1-i);
                    if(indexOfPossibleVal!== -1){
                        coveredPoints[indexOfPossibleVal].cover++;
                    } else {
                        coveredPoints.push({x:pair.x1+i,y:pair.y1-i,cover:1});
                    }
                }
            } else {
                for(let i = 0;i<= pair.x2-pair.x1;i++){
                    const indexOfPossibleVal = coveredPoints.findIndex(el => el.x === pair.x1+i && el.y === pair.y1+i);
                    if(indexOfPossibleVal!== -1){
                        coveredPoints[indexOfPossibleVal].cover++;
                    } else {
                        coveredPoints.push({x:pair.x1+i,y:pair.y1+i,cover:1});
                    }
                }
            }
        }
    }
    index++;
   console.log(`${(index/coords.length)*100}%`) 
}


let overlapedElems = 0

for(let point of coveredPoints){
    if(point.cover > 1){
        overlapedElems++;
    }
}

console.log(overlapedElems);