var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.addToTail = function(val) {
  var node = new Node(val);

  if (!this.head && !this.tail) {
    this.head = this.tail = val;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
}

LinkedList.prototype.removeNode = function(val) {
var currNode = this.head;

// If no head, handle error
if (!this.head) {
  return null;
}

// If val to remove is at head
while (this.head && this.head.val === val) {
  this.head = this.head.next;
}

// If val to remove is in middle of LL
while (currNode.next) {
  if (currNode.next.val === val) {
    currNode.next = currNode.next.next;
  } else {
    currNode = currNode.next;
  }
}

// If val to remove is at the tail
if (currNode.next.val === val && currNode.next.next === null) {
  currNode.next = null;
}

}