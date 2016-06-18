function characterFrequency(string) {
  var obj = {};
  var results = [];
  
  for (var i = 0; i < string.length; i++) {
    obj[string[i]] = obj[string[i]] + 1 || 1;
  }
  for (var key in obj) {
    results.push([key, obj[key]])
  }
  
  return results.sort(function(a,b) {
    // if frequency is the same
    if (a[1] === b[1]) {
       // sort by char
       if (b[0] > a[0]) {
          return -1;
       } else if (b[0] < a[0]) {
         return 1;
       } else {
        return 0;
       }
    }
    return b[1] - a[1];eam
  });
  
}