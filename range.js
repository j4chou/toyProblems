var Range = function(start, end, step) {
  //Your code here
  this.start = start || null;
  this.end = this.end;
  this.step = this.step || 1;

};
 
Range.prototype.size = function () {
  if (!this.end) {
    return 1;
  }
  return Math.floor((this.start-this.end)/this.step) + 1
};

Range.prototype.each = function (callback) {
  if (this.end > this.start) {
    for (var i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else {
    for (var i = this.start; i >= this.end; i -= Math.abs(this.step)) {
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {
  var result = false;
  if (this.start === val || this.end === val) {
    result = true;
  }
  this.each(function(num) {
    if (num === val) {
      result = true;
    }
  });
  return result;
};
