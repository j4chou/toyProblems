function characterFrequency(string) {
  var obj = {};
  var results = [];
  
  // Store characters in object and record frequency
  for (var i = 0; i < string.length; i++) {
    obj[string[i]] = obj[string[i]] + 1 || 1;
  }
  // Store key and value in a tuple for sorting
  for (var key in obj) {
    results.push([key, obj[key]])
  }
  
  return results.sort(function(a,b) {
    // If frequency is the same
    if (a[1] === b[1]) {
       // Sort by char
       if (b[0] > a[0]) {
          return -1;
       } else if (b[0] < a[0]) {
         return 1;
       } else {
        return 0;
       }
    }
    return b[1] - a[1];
  });
  
}