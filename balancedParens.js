function balancedParens(string) {
  var count = 0;
  // Iterate through string
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      count++;
      // If count is greater than zero, there has been an opening parenthesis
    } else if (string[i] === ")" && count > 0) {
      count--;
    }
  }
  return count === 0;
}