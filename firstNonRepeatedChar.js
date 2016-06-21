function firstNonRepeatedChar(string) {
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    obj[string[i]] = obj[string[i]] + 1 || 1;
  }
  for (var i = 0; i < string.length; i++) {
    if (obj[string[i]] === 1) {
      return string[i];
    }
  }
  return null;
}