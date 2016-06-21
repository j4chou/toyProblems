function rps(rounds) {
  var results = [];
  var combos = ["r"."p","s"];

  function recurse(str) {
    if (str.length === rounds) {
      results.push(str);
      return;
    }
    for (var i = 0; i < combos.length; i++) {
      recurse(str + combos[i]);
    }
  }
recurse("");
return results;
}