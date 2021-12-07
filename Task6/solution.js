// Generated by CoffeeScript 2.6.1
(function() {
  var CO2, fs, i, input, j, k, oneTimes, oxygen, record, ref, ref1, zeroTimes;

  fs = require('fs');

  input = fs.readFileSync('input.txt', 'utf8').split('\r\n');

  oxygen = '';

  CO2 = '';

  for (i = j = 0, ref = input[0].length - 1; (0 <= ref ? j <= ref : j >= ref); i = 0 <= ref ? ++j : --j) {
    ((function() {
      var k, len;
      // Looking for oxygen
      oneTimes = 0;
      zeroTimes = 0;
      for (k = 0, len = input.length; k < len; k++) {
        record = input[k];
        (record[i] === '1' ? oneTimes++ : record[i] === '0' ? zeroTimes++ : void 0);
      }
      if (oneTimes > zeroTimes) {
        input = input.filter(function(value) {
          return value[i] === '1';
        });
        return console.log(`More ones aaaaaa ${input.length}`);
      } else if (zeroTimes > oneTimes) {
        input = input.filter(function(value) {
          return value[i] === '0';
        });
        return console.log(`More zeros ${input.length}`);
      } else if (zeroTimes === oneTimes) {
        if (input[0][i] === '1') {
          return oxygen = input[0];
        } else {
          return oxygen = input[1];
        }
      } else if (input.length === 1) {
        return oxygen = input[0];
      }
    })());
  }

  input = fs.readFileSync('input.txt', 'utf8').split('\r\n');

  for (i = k = 0, ref1 = input[0].length - 1; (0 <= ref1 ? k <= ref1 : k >= ref1); i = 0 <= ref1 ? ++k : --k) {
    ((function() {
      var l, len;
      // Looking for CO2
      oneTimes = 0;
      zeroTimes = 0;
      for (l = 0, len = input.length; l < len; l++) {
        record = input[l];
        (record[i] === '1' ? oneTimes++ : record[i] === '0' ? zeroTimes++ : void 0);
      }
      if (oneTimes > zeroTimes && zeroTimes !== 0 && oneTimes !== 0) {
        input = input.filter(function(value) {
          return value[i] === '0';
        });
        return console.log(`More ones bbbb ${input.length}`);
      } else if (zeroTimes > oneTimes && zeroTimes !== 0 && oneTimes !== 0) {
        input = input.filter(function(value) {
          return value[i] === '1';
        });
        return console.log(`More zeros ${input.length}`);
      } else if (input.length === 1) {
        return CO2 = input[0];
      } else if (zeroTimes === oneTimes) {
        if (input[0][i] === '0') {
          return CO2 = input[0];
        } else {
          return CO2 = input[1];
        }
      }
    })());
  }

  console.log(`Bin value of oxygen ${oxygen}, bin value of CO2 ${CO2}`);

  console.log((parseInt(oxygen, 2)) * (parseInt(CO2, 2)));

}).call(this);