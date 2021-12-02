fs = require 'fs'
inputFile = 'input.txt'
input = ''
inputArray = []
aim = 0
depth = 0
horizontal = 0

readFile = ->
    input = fs.readFileSync inputFile, 'utf8'
    inputArray = input.split('\r\n') 

changeDepthAndHorizontal = (value) ->
    horizontal += Number value
    depth += Number value * Number aim

countDirectons = (el) ->
    [direction, value] = el.split(' ')
    value = Number value
    switch direction
        when "up" then aim -= value
        when "down" then aim += value
        when "forward" then changeDepthAndHorizontal value

readFile()

countDirectons el for el in inputArray

console.log "Aim: #{aim} Depth: #{depth} Horizontal: #{horizontal}"
console.log "Depth * Horizontal = #{depth * horizontal}"
