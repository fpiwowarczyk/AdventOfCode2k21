fs = require 'fs'

input = fs.readFileSync('input.txt','utf8').split '\n'

bingoNumbers = input.shift().split(',')

bingoBoards = []
tab = []
i=0
(
    newLine = []
    newLine.push(el.replace('\r','')) for el in line.split(' ')
    tab.push newLine
    i++
    if(i==5)
        i=0
        bingoBoards.push(tab)
        tab = []

) for line in input when line isnt '\r'

class BingoBoard
    board = {}
    constructor: (table) ->
        col = 0
        row = 0
        (
            
            board[el] = {value: el, col: col,row: row,picked: false} 
            col++
            if col == 5
                col = 0
                row++
        ) for el in line when el isnt '' for line in table 
        console.log board 

    getByCoords:  (col,row) ->
        for v,k of board 
            console.log v,k
            if k.col == col and k.row == row 
                return k
    
    pick: (value) ->
        board[value] = {board[value]...,picked: true } 
        console.log board[value ]


temp = new BingoBoard bingoBoards[0] 
toSet = temp.getByCoords(1,1)
temp.pick(temp)



# I GIVE UP COFFEE IS SHIT 