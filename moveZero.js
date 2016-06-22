/*
Given an array of numbers, write a function to move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.
For example, given nums = [0, 1, 0, 3, 12], after calling your function, 
nums should be [1, 3, 12, 0, 0]. You must do this in-place w/o making a copy of the array.
*/
function sortZeroes(arr) {
  var end = arr.length-1;
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i; j < arr.length - 1; j++) {
      // If the value is zero
      if (arr[j] === 0) {
        // Until the index is not the last index
        while (j !== arr.length - 1) {
          // Swap variables and increase index
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          j++;
        }
      }
    }
  }
return arr;
}
