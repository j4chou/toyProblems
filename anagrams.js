function allAnagrams(string) {
  var results = {};

  function recurse(input, str) {
    // Store string as key in an object
    if (input.length === string.length) {
      results[input] = input;
    }
    // Iterate through string to get all possible anagrams from each letter
    for (var i = 0; i < str.length; i++) {
      recurse(input + str[i], str.slice(0,i) + str.slice(i+1)) 
    }
  }
 recurse("",string)
 // Since results were stored in an object, the keys will be duplicate-free
 return Object.keys(results);
}