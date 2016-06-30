const missingNum = (arr) => {
  let n = arr.length + 1;

  // formual for linear series of n numbers
  let expectedSum = n * (n+1) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  
  }
  // subtract sum from expected to find the missing number
  return expectedSum - sum;
}