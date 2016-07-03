function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var results;
  while (arr.length >= 1) {
    arr = cut(arr,n);
  }
}

function cut(array, length) {
  var min = Math.min.apply(null, array);
  var newArr = [];
  var count = 0;
    for (var i = 0; i < length; i++) {
      if (array[i]-min >= 0) {
        count++;
        if (arr[i]-min > 0) {
        newArr.push(array[i]-min);
        }
      }
    } 
  console.log(count)
  return newArr;
}