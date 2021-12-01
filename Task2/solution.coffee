fs = require 'fs'
input = 'input.txt'

finalResult = 0
inputArray = []
finalArray = []
readFile = ->
    input = fs.readFileSync input, 'utf8'

removeTab = (str) -> str.replace '\r', ''


transformToArray = -> 
    inputArray = input.split('\n')
    finalArray.push removeTab el for el in inputArray

addElements = (elems) -> 
    output = 0
    output += Number el for el in elems
    return output

countResult = ->
    for i in [0..inputArray.length]
        arrayA = finalArray[i..i+2]
        arrayB = finalArray[i+1..i+3]
        if ((addElements arrayA) < (addElements arrayB))
            console.log 'Increased'
            finalResult += 1 



readFile()
transformToArray()
countResult()

console.log finalResult