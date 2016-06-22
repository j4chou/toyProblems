var hasCycle = function(linkedList) {
  var fast = linkedList;
  var slow = linkedList;
  // Use two different pointers
  while(fast.next.next !== null && fast.next !== null) {
    // If the values are the same at one point, there's a cycle
    if (fast.next.next === slow.next) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}