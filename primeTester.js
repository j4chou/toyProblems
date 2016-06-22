function primeTester(n) {
  if (n === 1) { return false; }
  // If n does not divide equally until up to its square root, it's a prime
  for (var i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}