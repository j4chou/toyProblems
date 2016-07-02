function counter(a,b) {
  var storeA = {};
  var storeB = {};
  var count = 0;
  
  // Use object to store character counts of each string
  for (var i = 0; i < a.length; i++) {
    storeA[a[i]] = storeA[a[i]] + 1 || 1;
  }
  for (var x = 0; x < b.length; x++) {
    storeB[b[x]] = storeB[b[x]] + 1 || 1;
  }
  
  // Iterate over k/v in A
  for (var key in storeA) {
    // If key in A doesnt exist in B
    if (!storeB[key]) {
      // Add values to count and delete key
      count += storeA[key]
      delete storeA[key];
    }
  }
  // Iterate over k/v in B
  for (var key2 in storeB) {
    // If key in B doesn't exist in A
    if (!storeA[key2]) {
      // Add values to count and delete key
      count += storeB[key2];
      delete storeB[key2];
    }
  }
  // For leftover common keys
  for (var p in storeA) {
    // While the values are not equal, decrease by 1 while adding to count
    while (storeA[p] > storeB[p] ) {
      storeA[p]--;
      count++;
    }
    while (storeB[p] > storeA[p] ) {
      storeB[p]--;
      count++;
    }
  }
  console.log(count)
}