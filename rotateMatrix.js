function rotateMatrix(matrix) {
  var result = [];

  // Iterate thru length of collection
  for (var i = 0; i < matrix[0].length; i++) {
    // Create a new array to hold new values when inner loop finishes
    var arr = [];
    // First values will be the first index of the last matrix and will flow up, then right
    for (var j = matrix.length - 1; j >= 0; j--) {
      arr.push(matrix[j][i]);
    }
    result.push(arr);
  }
  return result;
}