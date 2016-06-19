var bind = function(func, context) {
  var args = Array.prototype.slice.call(arguments,2);
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    var args3 = args.concat(args2);
    return func.apply(context, args3);
  }
};

Function.prototype.bind = function(context) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments,1);
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    var args3 = args.concat(args2);
    return fn.apply(context, args3);
  }
};