// const fs = require('fs'); Coment that because my ide was pointing error because of double import 
function day4(){
    const procesDir = process.cwd()
    const input = fs.readFileSync('input.txt', 'utf8').split('\n').filter((el:String) => el !== '\r');
    
    const picks = input.shift().split(',').map((el: String) => Number(el))
    
    let bingoBoards = []
    
    let singleBoard = []
    
    interface Element{
        col:number,
        row:number,
        value:number,
        picked:boolean
    }
    
    for(let i = 0;i<=(input.length/5)-1;i++){
        const temp = input.slice(i*5,i*5+5);
        let row = 0;
        for(let line of temp){
            let col = 0;
            const splitedLine = line.split(' ').filter((e:String) => e!== '');
            for (let element of splitedLine){
                singleBoard.push({
                    col: col,
                    row: row,
                    value: Number(element),
                    picked: false
                });
                col++;
            }
            row++;
        }
        bingoBoards.push(singleBoard);
        singleBoard = [];
    }
    
    
    function isWinning(board:Element[]){
        let output = false;
        //Checking lines 
        for(let i = 0;i<=4;i++){
            const el1 = board.find((el:Element)=>el.row === i && el.col === 0);
            const el2 = board.find((el:Element)=>el.row === i && el.col === 1);
            const el3 = board.find((el:Element)=>el.row === i && el.col === 2);
            const el4 = board.find((el:Element)=>el.row === i && el.col === 3);
            const el5 = board.find((el:Element)=>el.row === i && el.col === 4);
            if(el1!.picked === true &&
                el2!.picked === true &&
                el3!.picked === true &&
                el4!.picked === true &&
                el5!.picked === true){
                    return true; 
                }
        }
    
        for(let i = 0;i<=4;i++){
            const el1 = board.find((el:Element)=>el.row === 0 && el.col === i);
            const el2 = board.find((el:Element)=>el.row === 1 && el.col === i);
            const el3 = board.find((el:Element)=>el.row === 2 && el.col === i);
            const el4 = board.find((el:Element)=>el.row === 3 && el.col === i);
            const el5 = board.find((el:Element)=>el.row === 4 && el.col === i);
            if(el1!.picked === true &&
                el2!.picked === true &&
                el3!.picked === true &&
                el4!.picked === true &&
                el5!.picked === true){
                    return true; 
                }
        }
        return false 
    }
    let index = 0;
    let winningRounds:number[] = []
    for(const currentBoard of bingoBoards){
        let round = 0 
        for(const pick of picks){
        
            const possiblyValue = currentBoard.findIndex((el:Element)=>el.value === pick);
            if(possiblyValue !== -1){
                currentBoard[possiblyValue].picked = true;
            }
            if(isWinning(currentBoard)){
                winningRounds.push(round);
                break;
    
            }
            round++;
        }
        
        index++;
    }
    const fastersBoardRound = Math.min(...winningRounds)
    const slowestBoardRound = Math.max(...winningRounds)
    const indexOfFastestBoard = winningRounds.findIndex((el:Number)=> el === fastersBoardRound);
    const indexOfSlowestBoard = winningRounds.findIndex((el:Number)=> el === slowestBoardRound);
    
    console.log(picks);
    const sumOfFalseElemsFastest = bingoBoards[indexOfFastestBoard]
    .filter((el:Element) => el.picked !== true)
    .map((el:Element) => el.value)
    .reduce((a:number,b:number)=>{
        return a + b;
    
    },0);
    
    const sumOfFalseElemsSlowest = bingoBoards[indexOfSlowestBoard]
    .filter((el:Element) => el.picked !== true)
    .map((el:Element) => el.value)
    .reduce((a:number,b:number)=>{
        return a + b;
    
    },0);
    
    console.log(`First star:${sumOfFalseElemsFastest*picks[fastersBoardRound]}`);
    console.log(`Second star:${sumOfFalseElemsSlowest*picks[slowestBoardRound]}`);
    
}
day4();
