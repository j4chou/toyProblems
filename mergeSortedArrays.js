function mergeSorted(a,b) {
  // Create variable to hold sorted array
  var results = [];
  // While both arrays are not empty
  while (a.length && b.length) {
    // If first element at A is less than first element at B
    while (a[0] <= b[0]) {
      // Push first element and shift it out of the array
      results.push(a.shift());
    }
    while (a[0] >= b[0]) {
      results.push(b.shift());
    }
  }
  // If there are still elements left in either array
  if (a.length) {
    // Add remaining elements to results array
    return results.concat(a);
  } else {
    return results.concat(b);
  }
  return results;
}
