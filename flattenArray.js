var flatten = function(array) {
  var results = [];
  // Iterate through array
  for (let i = 0; i < array.length; i++) {
    // If index is an array
    if (Array.isArray(array[i])) {
      // Recurse to check if it contains any other arrays. Concat.
      results = results.concat(flatten(array[i]))
    } else {
      // If an integer, push into results
      results.push(array[i]);
    }
  }
  return results;
};
