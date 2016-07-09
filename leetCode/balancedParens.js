var isValid = function(s) {
  // Use object to hold braces
    var braces = { '{':'}', '(':')', '[':']' };
    // Use arr to store opening braces
    var arr = [];
    // Iterate through string
    for (var i = 0; i < s.length; i++) {
      // If it's an opening brace, it will be a key in the object
      if (braces[s[i]]) {
        arr.push(s[i]);
      } 
      // If there are opening braces in the array
      if (arr.length) {
        // If the string is a closing brace
        if (s[i] === '}' || s[i] === ')' || s[i] === ']') {
          // Use the last value in the array as a key in object to look up value, which should be a closing brace
          if ( braces[arr.pop()] !== s[i] ) {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    return arr.length === 0;
};