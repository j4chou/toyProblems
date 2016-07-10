function fib(num) {
  if (num <= 2) {
    return 1;
  } else {
    // Add previous numbers
    return fib(num-2) + fib(num-1);
  }
}
