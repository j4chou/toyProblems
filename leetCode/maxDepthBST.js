var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
  // Each node will return value of 1. 
  // Keep traversing, when done, call stack flows back up the tree and will retrieve max values of L / R
 return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};