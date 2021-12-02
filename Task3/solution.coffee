fs = require 'fs'
inputFile = 'input.txt'
input = ''
inputArray = []
depth = 0
horizontal = 0
readFile = ->
    input = fs.readFileSync inputFile, 'utf8'
    inputArray = input.split('\r\n')



countDirectons = (el) ->
    [direction, value] = el.split(' ')
    switch direction
        when "up" then depth -= Number value
        when "down" then depth += Number value
        when "forward" then horizontal += Number value

readFile()

countDirectons el for el in inputArray


console.log depth*horizontal
