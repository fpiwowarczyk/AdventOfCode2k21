fs = require 'fs'
input =  fs.readFileSync('input.txt', 'utf8').split('\r\n')
gamma = 0
epsilon = 0




(
    oneTimes = 0
    zeroTimes = 0
    (
        if record[i] == '1'
            oneTimes++
        else if record[i] =='0'
            zeroTimes++
    ) for record in input
    if oneTimes > zeroTimes then (
        gamma += 1*2**(input[0].length-1-i)
        epsilon += 0*2**(input[0].length-1-i)
    ) else (
        gamma += 0*2**(input[0].length-1-i)
        epsilon += 1*2**(input[0].length-1-i)
    )
) for i in [0..input[0].length-1]

console.log gamma *epsilon