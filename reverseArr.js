function reverseArr(arr) {
  // Iterate only up to midpoint
  let mid = Math.floor(arr.length/2);
  // Iterate up to half of array
  for (let i = 0; i < mid; i++) {
    // Switch values
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 -i] = temp;
  }
  return arr;
}