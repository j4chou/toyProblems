function translateRomanNumeral(romanNumeral) {
  var sum = 0;
  // Iterate through characters
  for (var i = 0; i < romanNumeral.length; i++) {
    // If the character is valid
    if (DIGIT_VALUES[romanNumeral[i]]) {
      // If the character is less than the character after it, subtract from sum
      if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]]) {
        sum -= DIGIT_VALUES[romanNumeral[i]];
        // Otherwise, add it
      } else {
        sum += DIGIT_VALUES[romanNumeral[i]]
      }
    // Otherwise return null
    } else {
      return "null";
    }
  }
  return sum;
}

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};