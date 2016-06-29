function memoize(func) {
  var cache = {};
  return function() {
    var args = Array.prototype.slice.call(arguments);
    // If arguments already exist, return value
    if (cache[args]) {
      return cache[args];
    } else {
      // Apply arguments to function and store
      cache[args] = func.apply(this, args);
      return cache[args];
    }
  }
}