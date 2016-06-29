function sumArray(array) {
  let maxSum = array[0];
  let currSum = 0;

  for (let i = 0; i < array.length; i++) {
    currSum += array[i];
    // set maxSum to largest of two sums
    maxSum = Math.max(currSum, maxSum)
    // if currSum is negative, set it back to 0
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return maxSum;
}