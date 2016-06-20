Array.prototype.isSubsetOf = function(input) {
  var result = true;
  for (var i = 0; i < this.length; i++) {
    if (input.indexOf(this[i]) === -1) {
      result = false;
    }
  }
  return result;
}