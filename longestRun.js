function longestRun(string) {
  var currRun = [0,0];
  var longestRun = [0,0];

  // Store first character as initial char to compare
  var char = string[0];
  for (var i = 1; i < string.length; i++) {
    // If the next char is same as char
    if (string[i] === char) {
      // Update current run
      currRun[1] = i;
      // Update char to next index
      char = string[i];

      // Compare current run & longest by subtracting indices
      if (currRun[1] - currRun[0] > longestRun[1] - longestRun[0]) {
        longestRun = currRun;
      }
    } else {
      // Reset current run to the new character's index
      currRun = [i,i];
      char = string[i];
    }
  }
  return longestRun;
}