function factorial(num) {
  var product = 1;
  if (num === 0) {
    return product;
  } else {
    for (var i = 1; i <= num; i++) {
      product *= i;
    }
  }
return product;
}
