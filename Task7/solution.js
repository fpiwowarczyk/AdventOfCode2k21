// Generated by CoffeeScript 2.6.1
(function() {
  var bingoMatrix, bingoNumbers, el, fs, i, index, input, j, len, line, newLine, tab, tablesCount;

  fs = require('fs');

  input = fs.readFileSync('input.txt', 'utf8').split('\n');

  bingoNumbers = input.shift().split(',');

  bingoMatrix = [];

  tab = {};

  bingoMatrix.push(tab);

  i = 0;

  tablesCount = 0;

//     console.log newLine
//     tab[i] = newLine
//     i++
//     if(i==5)
//         i=0
//         bingoMatrix.push(tab)
//         tab = {}
  for (j = 0, len = input.length; j < len; j++) {
    line = input[j];
    if (line !== '\r') {
      ((function() {
        var k, len1, ref, results;
        //     console.log line
        newLine = [];
        index = 0;
        console.log(line.split(' '));
        ref = line.split(' ');
        results = [];
        for (k = 0, len1 = ref.length; k < len1; k++) {
          el = ref[k];
          if (el !== "") {
            results.push((newLine[el] = {
              row: i,
              col: index,
              picked: false
            }, index++));
          }
        }
        return results;
      })());
    }
  }

  console.log(bingoMatrix[0]);

}).call(this);