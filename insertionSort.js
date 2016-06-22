function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    // While the value is less than the value before it
    while (array[i] < array[j]) {
      // Keep swapping
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      // Decrease index value until the value finds the correct spot
      if (j > 0) {
        j--;
      }
      i--;
    }
  }
return array;
}