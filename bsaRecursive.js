const binarySearchArr = (arr, target, start, end) => {
  let mid = Math.floor((start+end)/2)
  if (start > end) {
    return -1
  }
  if (target < arr[mid]) {
    return binarySearchArr(arr, target, start, mid-1)
  } else if (target > arr[mid]) {
    return binarySearchArr(arr, target, mid+1, end)
  }
  return mid;
}