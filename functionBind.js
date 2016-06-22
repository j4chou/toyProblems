var bind = function(func, context) {
  // Get additional arguments passed in
  var args = Array.prototype.slice.call(arguments,2);
  return function() {
    // Also get argument passed into func
    var args2 = Array.prototype.slice.call(arguments);
    // Concatenate arguments
    var args3 = args.concat(args2);
    // Apply context and arguments to function
    return func.apply(context, args3);
  }
};

Function.prototype.bind = function(context) {
  // Function is the object 'bind' is called on
  var fn = this;
  // Capture additional arguments
  var args = Array.prototype.slice.call(arguments,1);
  return function() {
    // Capture arguments passed into function
    var args2 = Array.prototype.slice.call(arguments);
    // Concatenate arguments
    var args3 = args.concat(args2);
    // Apply context and arguments to function
    return fn.apply(context, args3);
  }
};