fs = require 'fs'
input = 'input.txt'

inputArray = []
arrayA = []
arrayB = []
arrayC = []

readFile = ->
    input = fs.readFileSync input, 'utf8'

transformToArray = -> 
    inputArray = input.split('\n')

    inputArray = removeTabs for elem in inputArray 

removeTabs = (str) -> str.replace '\r', ''

readFile()
transformToArray()

console.log inputArray
