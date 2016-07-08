function findLargestDiff(arr) {
  var largest = 0;
  var diff;
  // If only one element, no findLargestDiff
  if (arr.length <=1) { return -1; }
  
  // Iterate thru array
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      // If first value is less than value after it
      if (arr[i] < arr[j]) {
        // Calculate difference
        diff = Math.abs(arr[j] - arr[i]);
        if (diff > largest) {
          largest = diff; 
        }
      }
    }
  }
  // If the difference is zero or negative, there's no largest diff
  if (largest <= 0) { return -1; }
  
  return largest;
}

console.log(findLargestDiff([7, 8, 4, 9, 9, 15, 3, 1, 10]));