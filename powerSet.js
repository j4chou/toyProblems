function powerSet(string) {
  var chars = {};
  var sets = {};

  for (var i = 0; i < string.length; i++) {
    chars[string[i]] = true;
  }
  var filtered = Object.keys(chars).sort().join("");
  sets[filtered] = true;

  function recurse(stringSet) {
    for (var i = 0; i < stringSet.length; i++) {
      var str = stringSet.slice(0,i) + stringSet.slice(i+1);
      if (!sets[str]) {
        sets[str] = true;
      }
      recurse(str);
    }
  }
  recurse(filtered);
  return Object.keys(sets).sort();
}