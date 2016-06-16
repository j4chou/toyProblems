function countEvents(array) {
  // Use an object to keep track of each index's occurrence
  var obj = {};
  // Iterate through the array, store index as a key in object
  for (var i = 0; i < array.length; i++) {
    obj[array[i]] = obj[array[i]] + 1 || 1;
  }
  // Iterate thru array again to return first even value
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]] % 2 === 0) {
      return array[i];
    }
  }
  return null;
}