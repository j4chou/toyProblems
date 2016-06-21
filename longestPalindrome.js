function longestPalindrome(string) {
  var longest = "";

  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      var currString = string.substring(i, j+1);
      if (isPalindrome(currString)) {
        if (currString.length > longest.length) {
          longest = currString;
        }
      }
    }
  }
  return longest;
}


function isPalindrome(string) {
  var half;
  if (string.length % 2 === 0) {
    half = string.length / 2;
  } else {
    half = Math.floor(string.length / 2) - 1;
  }

  for (var i = 0; i < half; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}