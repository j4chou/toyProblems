function binarySearch(array, target) {
  var min = 0;
  var max = array.length - 1;
  var mid = Math.floor( (min + max) /2)

  while (min <= max) {
    if (array[mid] === target) {
      return mid;
    } else if (target < array[mid]) {
      max = mid - 1;
    } else if (target > array[mid]) {
      min = mid + 1;
    }
  }
  return -1;
}
