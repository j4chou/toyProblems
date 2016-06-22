function addDigits(num) {
var sum;

  function recurse(total) {
    sum = 0;
    // Convert total to string in order to iterate through
    total = total.toString();
    for (var i = 0; i < total.length; i++) {
      sum += total[i];
    }
    // If the sum is not a single digit, keep adding its numbers
    if (sum.toString().length > 1) {
      recurse(sum);
    }
  }
recurse(num);
return sum;  
}