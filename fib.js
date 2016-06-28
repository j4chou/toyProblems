function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  // Start off first sequence
  var a = 0;
  var b = 1;
  var c;

  for (var i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}