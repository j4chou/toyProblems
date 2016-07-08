function greatestProduct(arr) {
  var greatest = 0;
  var product;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      for (var k = j+1; k < arr.length; k++) {
         product = arr[i] * arr[j] * arr[k];
        if (product > greatest) {
          greatest = product; 
        }
      }
    }
  }
  return greatest;
}

console.log(greatestProduct([-10, 7, 29, 30, 5, -10, -70]));