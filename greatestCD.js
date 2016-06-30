function gcd(a,b) {
  let max = 2;
  let div = 1;

  // While the divisor is less than both numbers
  while (div <= a && div <= b) {
    // If both numbers are divisible
    if (a % div === 0 && b % div === 0) {
      max = div;
    }
    div++;
  }
  return max;
}