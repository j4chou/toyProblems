var Queue = function() {
  this.head = 0;
  this.tail = 0;
  this.storage = {};

  // Queue is first in, first out. 

  this.enqueue = function(val) {
    // Add value to end of queue
    this.storage[this.tail] = val;
    this.tail++;
  }

  this.dequeue = function() {
    // Delete value at head of queue
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