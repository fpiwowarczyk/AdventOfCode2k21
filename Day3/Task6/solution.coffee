fs = require 'fs'
input =  fs.readFileSync('input.txt', 'utf8').split('\r\n')
oxygen = ''
CO2 = ''

# Looking for oxygen
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
        input = input.filter (value) -> value[i] == '1'
        console.log "More ones aaaaaa #{input.length}"
    ) else if zeroTimes > oneTimes then (
        input = input.filter (value) -> value[i] == '0'

        console.log "More zeros #{input.length}"
    ) else if zeroTimes == oneTimes then ( 
        if input[0][i] == '1' then oxygen = input[0]
        else oxygen =  input[1]
    ) else if input.length == 1 then oxygen = input[0]
) for i in [0..input[0].length-1]

input =  fs.readFileSync('input.txt', 'utf8').split('\r\n')

# Looking for CO2
(
    oneTimes = 0
    zeroTimes = 0
    (
        if record[i] == '1'
            oneTimes++
        else if record[i] =='0'
            zeroTimes++
    ) for record in input
    if oneTimes > zeroTimes && zeroTimes != 0 && oneTimes != 0 then (
        input = input.filter (value) -> value[i] == '0'
        console.log "More ones bbbb #{input.length}"
    ) else if zeroTimes > oneTimes && zeroTimes != 0 && oneTimes != 0  then (
        input = input.filter (value) -> value[i] == '1'
        console.log "More zeros #{input.length}"
    ) else if input.length == 1 then (
        CO2 = input[0]
    ) else if zeroTimes == oneTimes then (
        if input[0][i] == '0' then CO2 = input[0] 
        else CO2 = input[1]
    )

) for i in [0..input[0].length-1]

console.log "Bin value of oxygen #{oxygen}, bin value of CO2 #{CO2}"

console.log (parseInt oxygen, 2) * (parseInt CO2, 2)