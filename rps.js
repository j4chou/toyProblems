function rps(rounds) {
  var results = [];
  var combos = ["r","p","s"];

  function recurse(str) {
    // If string's length is equal to round number
    if (str.length === rounds) {
      // Store string in result array
      results.push(str);
      return;
    }
    // Iterate thru possible combinations
    for (var i = 0; i < combos.length; i++) {
      // Store combination and recurse 
      recurse(str + combos[i]);
    }
  }
recurse("");
return results;
}