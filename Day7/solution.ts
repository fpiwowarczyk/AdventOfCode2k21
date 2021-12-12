function day8(){
    const fs = require('fs');

const crabPositions = fs.readFileSync('input.txt','utf8').split(',');


// I think there might by two solutions, one that i will check each crab postion and try to move all of them to his positon 
// or calculate average position and move them to that position
function calculateMoveCost (move:number){
    let output = 0
    for(let i = 1;i<=move;i++){
        output+=i;
    }
    return output;
}

let fuelCosts = []
for(let mainPosition of crabPositions){
    let fuelCost = 0;
    for(let position of crabPositions){
        let move = Math.sqrt(((mainPosition-position)**2))
        fuelCost+= calculateMoveCost(move);
    }
    console.log(`Fuel cost for all crabs to move to positon: ${mainPosition} is ${fuelCost}`)
    fuelCosts.push(fuelCost);
}

let average = (crabPositions.reduce((a:number,b:number) => (a+b)/2))


let fuelCost = 0
for(let position of crabPositions){
    let move = Math.sqrt(((average-position)**2))
    fuelCost+= calculateMoveCost(move);

}
console.log(`Fuel cost for all crabs to move to average positon: ${average} is ${fuelCost}`)
fuelCosts.push(fuelCost);
console.log(`Lowest cost of fuel is ${Math.min(...fuelCosts)}`)

//One star  = 356958

// Two stars 

}