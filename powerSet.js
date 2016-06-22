function powerSet(string) {
  var chars = {};
  var sets = {};

  // Store characters in object to rid duplicates
  for (var i = 0; i < string.length; i++) {
    chars[string[i]] = true;
  }
  // Capture keys and join them into a string
  var filtered = Object.keys(chars).sort().join("");

  // Store string as key in object
  sets[filtered] = true;

  function recurse(stringSet) {
    for (var i = 0; i < stringSet.length; i++) {
      // Get all possible anagrams of string 
      var str = stringSet.slice(0,i) + stringSet.slice(i+1);
      // Store in object if it doesn't exist
      if (!sets[str]) {
        sets[str] = true;
      }
      recurse(str);
    }
  }
  recurse(filtered);
  return Object.keys(sets).sort();
}