function balancedParens(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      count++;
    } else if (string[i] === ")" && count > 0) {
      count--;
    }
  }
  return count === 0;
}