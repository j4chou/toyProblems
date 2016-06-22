function firstNonRepeatedChar(string) {
  var obj = {};
  // Store character as key in object, and quantity as value
  for (var i = 0; i < string.length; i++) {
    obj[string[i]] = obj[string[i]] + 1 || 1;
  }
  // Iterate over string to get the first character (source of truth)
  for (var i = 0; i < string.length; i++) {
    if (obj[string[i]] === 1) {
      return string[i];
    }
  }
  return null;
}