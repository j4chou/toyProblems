var compose = function() {
  var fn = Array.prototype.slice.call(arguments);
  return function(arg) {
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