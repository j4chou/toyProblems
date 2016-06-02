/*
Given two arrays of negative/positive integers, return a new array such that each element at index n 
is the sum of the two elements from the other arrays at their index n’s.

xs: [10, 20, 30]
ys: [1, 2]
Output: [11, 22]
*/

function zipSum (xs, ys) {
  // Declare variable to store sums
  var output = [];

  // Take the shortest array
  var arr = Math.min(xs.length, ys.length);
  // Iterate through arr
    for (var i = 0; i < arr; i++) {
    // Calculate sum of each index of both arrays and push to output array
      output.push(xs[i] + ys[i])
    }
  return output;
}
