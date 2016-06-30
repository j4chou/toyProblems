const sumFinder = (arr, sum) => { 
  // use nested loops to search for sum in all combinations
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if ( i + j === sum ) {
        return true;
      }
    }
  }
  return false;
}