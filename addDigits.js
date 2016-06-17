function addDigits(num) {
var sum;

  function recurse(total) {
    sum = 0;
    total = total.toString();
    for (var i = 0; i < total.length; i++) {
      sum += total[i];
    }

    if (sum.toString().length > 1) {
      recurse(sum);
    }
  }
recurse(num);
return sum;  
}