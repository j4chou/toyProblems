function longestRun(string) {
  var currRun = [0,0];
  var longestRun = [0,0];

  var char = string[0];
  for (var i = 1; i < string.length; i++) {
    if (string[i] === char) {
      currRun[1] = i;
      char = string[i];
      if (currRun[1] - currRun[0] > longestRun[1] - longestRun[0]) {
        longestRun = currRun;
      }
    } else {
      currRun = [i,i];
      char = string[i];
    }
  }
  return longestRun;
}