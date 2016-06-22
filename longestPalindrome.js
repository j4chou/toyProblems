function longestPalindrome(string) {
  var longest = "";
// Use nested for loops to capture every possible string combination
  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      // Check every substring
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
// Check if the string is a palindrome, only up until half the char length
  for (var i = 0; i < half; i++) {
    // If first char isn't same as last, going inwards, not a palindrome
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}