var Stack = function() {
  this.storage = [];
  this.counter = 0;

  this.push = function(val) {
    // Use counter as index to store valu
    this.storage[this.counter] = val;
    // Increase counter after storing
    this.counter++;
  }

  this.pop = function() {
    // Decrease counter before deleting to get to the value
    if (this.counter > 0) {
      this.counter--;
    }
    var temp = this.storage[this.counter]
    delete this.storage[this.counter];
    return temp;
  }

  this.size = function() {
    return this.counter;
  }
}