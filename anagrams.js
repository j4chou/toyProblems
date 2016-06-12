function allAnagrams(string) {
  var results = {};

  function recurse(input, str) {
    if (input.length === string.length) {
      results[input] = input;
    }
    for (var i = 0; i < str.length; i++) {
      recurse(input + str[i], str.slice(0,i) + str.slice(i+1)) 
    }
  }
 recurse("",string)
 return Object.keys(results);
}