var reverse = function(x) {
  var reversed = 0;
  var overflow = 2147483648;
  while (x !== 0) {
    reversed = (reversed * 10) + (x % 10)
    x = parseInt(x / 10);
  }
  return Math.abs(reversed) > overflow ? 0 : reversed;
};
