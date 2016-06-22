var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val) {
    // Add value to inbox
    inbox.push(val);
  };

  this.dequeue = function() {
   // If there is nothing in outbox
    if (outbox.size() === 0) {
      // Push inbox's last values into outbox
      while (inbox.size() > 0) {
        outbox.push(inbox.pop());
      }
    }
    // Remove outbox's last value (which is first value in inbox)
    return outbox.pop();
  };

  this.size = function() {
    return inbox.size();
  };
}