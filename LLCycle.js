var hasCycle = function(linkedList) {
  var fast = linkedList;
  var slow = linkedList;

  while(fast.next.next !== null && fast.next !== null) {
    if (fast.next.next === slow.next) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}