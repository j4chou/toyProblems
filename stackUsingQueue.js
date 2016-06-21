var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val) {
    inbox.push(val);
  };

  this.dequeue = function() {

    if (outbox.size() === 0) {
      while (inbox.size() > 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  this.size = function() {
    return inbox.size();
  };
}