function bubbleSort(array) {
  // Use double for-loop to compare all numbers at each index
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        // Swap variables
        var temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
return array; 
}