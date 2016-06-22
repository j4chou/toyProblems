function factorial(num) {
  var product = 1;

  if (num === 0) {
    // There's still one way to produce that number
    return product;
  } else {
    // Multiply result of product by the following integers until you've reached the number
    for (var i = 1; i <= num; i++) {
      product *= i;
    }
  }
return product;
}
