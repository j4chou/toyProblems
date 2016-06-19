function fractionConvert(num) {
  var count = 1;

  while ( parseFloat(num * count).toFixed(6) % 1 !== 0) {
    count++;
  }

  return parseInt(num*count) + '/' + count;
}
