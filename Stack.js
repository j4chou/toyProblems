var Stack = function() {
  this.storage = [];
  this.counter = 0;

  this.push = function(val) {
    this.storage[this.counter] = val;
    this.counter++;
  }

  this.pop = function() {
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