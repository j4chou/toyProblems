function counter(a,n,k) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i+1; j < n; j++) {
      if ( (a[i]+a[j]) % k === 0 ) {
        count++;
      }
    }
  }
  console.log(count)
}
