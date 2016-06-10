/* Pseudoclassical constructor function for a LL */
var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

/* Pseudoclassical constructor function for a Node */
var Node = function(val) {
  this.value = val;
  this.next = null;
}

/* Add to the tail of a LL */
LinkedList.prototype.addToTail = function(val) {
  var node = new Node(val);

  if (!this.head) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
}

/* Remove the head of a LL */
LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  } else {
    this.head = this.head.next;
  }
  return this.head.value;
}

/* Remove a node. Consider edge cases */
LinkedList.prototype.removeNode = function(target) {
// If no head, handle error
if (!this.head) {
  return null;
}

// If val to remove is at head
while (this.head && this.head.value === target) {
  this.head = this.head.next;
}

var currNode = this.head;
// If target to remove is in middle of LL
while (currNode) {
  if (currNode.next && currNode.next.value === target) {
    // If the next next node is null, the next node is the tail
    if (currNode.next.next === null) {
      // Set next node to null to remove tail
      currNode.next = null;
      // Reassign tail to the current node
      this.tail = currNode;
    } else {
      currNode.next = currNode.next.next;
    }
  }
  currNode = currNode.next;
}
}

/* Remove a node without using head or tail */
LinkedList.prototype.deleteNode = function(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}

/* Check to see if a LL contains a value */
LinkedList.prototype.contains = function(target) {
  while (this.head) {
    if (this.head.value === target) {
      return true;
    }
    this.head = this.head.next;
  }
  return false;
}
