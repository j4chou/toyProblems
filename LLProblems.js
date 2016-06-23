/* Implement an algorithm to find the kth to last element of a singly LL. */
/* Write code to partition a LL around a value X, such that nodes < X come before all nodes >= X. */
/* You have two numbers represented by a LL, where each node contains a single digit.
   The digits are stored in reverse order, such that 1's digit is at the head of the list.
   Write a fn that adds the two numbers and returns the sum as a LL.
*/
/* Given a circular LL, implement an algorithm which returns the node at the beginnign of the loop. */
/* Implement a function to check if a LL is a palindrome. */

/* Write code to remove duplicates from an unsorted LL. */


/* Reverse a LL. */
LinkedList.prototype.reverse = function(list) {
  var arr = [];
  while (list.head) {
    arr.push(list.head.value);
    list.head = list.head.next;
  }
  var reversed = new LinkedList();
  while (arr.length) {
    reversed.addToTail(arr.pop());
  }
  return reversed;
}

LinkedList.prototype.reverse = function(list) {
  var prev = null;
  var current = list.head;
  var next = current.next;

  // Set tail pointer to head
  list.head = current;

  while(current) {
    // Assign the node's next to the previous node
    current.next = prev;
    // Assign the previous node to the current node
    prev = current;
    // Assign the current node to the next node
    current = next;
    // If current.next exists
    if (next) {
      // Assign next to current's next next node
      next = next.next;
    }
  }
  // Reassign head to the previous value (this will be the last value of the list)
  list.head = prev;
  return list;
}

/* Implement an algorithm to delete a node in the middle of a singly LL, given only access to that node. */
LinkedList.prototype.deleteNode = function(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}