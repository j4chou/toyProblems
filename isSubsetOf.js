Array.prototype.isSubsetOf = function(input) {
  var result = true;
  // Iterate throough collection
  for (var i = 0; i < this.length; i++) {
    // Check if item in collection is also found in input
    if (input.indexOf(this[i]) === -1) {
      result = false;
    }
  }
  return result;
}