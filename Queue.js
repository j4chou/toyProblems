var Queue = function() {
  this.head = 0;
  this.tail = 0;
  this.storage = {};

  this.enqueue = function(val) {
    this.storage[this.tail] = val;
    this.tail++;
  }

  this.dequeue = function() {
    if (this.tail >= this.head) {
      var temp = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return temp;
    }
  }

  this.size = function() {
    return this.tail - this.head;
  }
}