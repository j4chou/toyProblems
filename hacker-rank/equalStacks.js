function getMax(arr,arr2,arr3) {
  var sum1 = getSum(arr);
  var sum2 = getSum(arr2)
  var sum3 = getSum(arr3)
  var min = Math.min(sum1,sum2,sum3)
  var balanced = false;
  
  while (!balanced) {
    if (sum1 == sum2 && sum2 == sum3) {
      balanced = true;
      break;
    } else {
      if (sum1 > min) {
        sum1 -= arr.shift();
      }
      if (sum2 > min) {
        sum2 -= arr2.shift();
      }
      if (sum3 > min) {
        sum3 -= arr3.shift();
      }
    }
  min = Math.min(sum1,sum2,sum3);
  }
console.log(min);
}

function getSum(array){return array.reduce(function(a,b){return a+b;},0)}
