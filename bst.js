var BinarySearchTree = function(val) {
  this.right = null;
  this.left = null;
  this.value = val;
}

BinarySearchTree.prototype.insert = function(val) {
// If the value does not exist
  if (!this.value) {
    this.value = new BinarySearchTree(val);
  }
 // If the value is greater than current node's value 
  if (val > this.value) {
    // Check the right nodes
    if (!this.right) {
      this.right = new BinarySearchTree(val);
    } else {
      // Recurse with the right node as the root
      this.right.insert(val);
    }
  } else if (val < this.value) {
    // Check the left nodes
    if (!this.left) {
      this.left = new BinarySearchTree(val);
    } else {
      // Recurse with the left node as root
      this.left.insert(val);
    }
  } else {
    return "This value already exists."
  }
}

BinarySearchTree.prototype.contains = function(target) {
  // If current node's value is target
  if (this.value === target) {
    return true;
    // Check if target is greater than value
  } else if (target > this.value) {
    // If right exists
    if (!this.right) {
      return false;
    }
    // Recurse w right node as root
    return this.right.contains(target);
    // If value is less than root val
  } else if (target < this.value) {
    if (!this.left) {
      return false;
    }
    // Recurse w left node as root
    return this.left.contains(target);
  } 
}

// Log all values in ascending order
BinarySearchTree.prototype.logTree = function(tree) {
  // If node has a left
  if (tree.left) {
    // Keep recursing with left as the root node
    tree.logTree(tree.left)
  }
  // When there are no more left nodes, it will log the value then check for the right node
  console.log(tree.value)

  // Check if tree has right nodes
  if (tree.right){ 
    // If so, keep recursing with right node as root node
    tree.logTree(tree.right)
  }
}