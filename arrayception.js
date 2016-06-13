function arrayception(array) {
  var maxDepth = 0;

  function recurse(arr,depth) {
    // Iterate through length of the array
    for (var i = 0; i < arr.length; i++) {
      // If the array index is also an array
      if (Array.isArray(arr[i])) {
        // Recurse and iterate through the length of that index's array, increase depth
        recurse(arr[i], depth+1)
      } else if (depth > maxDepth) {
        // If depth is greater than max depth, reset maxDepth's value to the current depth
        maxDepth = depth;
      }
    }
  }
  recurse(array,1);
  return maxDepth;
}