function unique(arr) {
  // Use storage to track elements
  var storage = {};
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    // If element is not in storage
    if (!storage.hasOwnProperty(arr[i])) {
      storage[arr[i]] = 1;
      results.push(arr[i]);
    }
  }
  return results;
}

console.log(unique([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]))