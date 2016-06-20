function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;

    while (array[i] < array[j]) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;

      if (j > 0) {
        j--;
      }
      i--;
    }
  }
return array;
}