fs = require 'fs'

input = fs.readFileSync('input.txt','utf8').split '\n'

bingoNumbers = input.shift().split(',')


winningOptions = ['01234','56789','1011121314','1516171819','2021222324','05101520','16111621','38131823','49141924']

bingoMatrix = []
tab = []
i=0
(
    newLine = []
    newLine.push(el.replace('\r','')) for el in line.split(' ')
    tab.push newLine
    i++
    if(i==5)
        i=0
        bingoMatrix.push tab
        tab = []

) for line in input when line isnt '\r'

getTabAsLine = (tab) ->
    tabAsLine = []
    tabAsLine.push el for el in  line when el isnt '' for line in tab
    return tabAsLine

indexToMatrixCoords (number)->
     switch number
        when 1 then

getWinningRound = (tabAsLine, tabNumber)->
    winningMatrix = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]
    matched = ''
    round = 0
    (if tabAsLine.includes number
        tabAsLine.indexOf number
        if winningOptions.includes matched
            console.log "For tab #{tabNumber} winning round is #{round}"
        )for number in bingoNumbers

getWinningRound(getTabAsLine(bingoMatrix[i]), i )for i in [0..bingoMatrix.length-1]


