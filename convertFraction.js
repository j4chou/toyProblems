function fractionConvert(num) {
  var count = 1;
  // Until the decimal leaves no remainder, keep increasing count
  while ( parseFloat(num * count).toFixed(6) % 1 !== 0) {
    count++;
  }
  // Multiple top and bottom by count to reach simplified fraction
  return parseInt(num*count) + '/' + count;
}
