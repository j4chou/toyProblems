function binarySearch(array, target) {
  var min = 0;
  var max = array.length - 1;
  var mid = Math.floor( (min + max) /2)

  while (min <= max) {
    if (array[mid] === target) {
      return mid;
      // If target is in the first half, change max bounds to half
    } else if (target < array[mid]) {
      max = mid - 1;
      // If target is in upper half, change min bounds to half
    } else if (target > array[mid]) {
      min = mid + 1;
    }
  }
  return -1;
}
