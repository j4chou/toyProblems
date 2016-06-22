function reverseInt(n) {
  var reverse = 0;

  // Until n is not zero
  while (n !== 0) {
    // Keep multiplying by ten and add remainder of number % 10
    reverse = (reverse*10) + (n%10);
    // Parse int to convert n into a whole number
    n = parseInt(n/10);
  }
  return reverse;
}