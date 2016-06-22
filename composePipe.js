var compose = function() {
  var fn = Array.prototype.slice.call(arguments);
  // Compose returns a function that may take in an argument
  return function(arg) {
    // Call argument on list of functions from right to left
    return fn.reduceRight(function(prev,next) {
      return next(prev)
    }, arg);
  }
}

var pipe = function() {
  var fn = Array.prototype.slice.call(arguments);
  return function(arg) {
    return fn.reduce(function(prev,next) {
      return next(prev);
    }, arg)
  }
}