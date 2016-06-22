Tree.prototype.getAncestorPath = function(child) {
  var path = [];

  function recurse(tree) {
    // If tree is child, add to path
    if (tree === child) {
      path.push(tree);
    }
    // If tree is a descendant, add to path
    if (tree.isDescendant(child)) {
      path.push(tree);
    }
    // Iterate through node's children
    for (var i = 0; i < tree.children.length; i++) {
      // Call recursive function to check for ancestors on children
      recurse(tree.children[i]);
    }
  }
  // Start search with root
  recurse(this);
  return path.length ? path : null;
}


Tree.prototype.getClosestCommonAncestor = function(tree,tree2) {
  var path = this.getAncestorPath(tree);
  var path2 = this.getAncestorPath(tree2);

  if (path && path2) {
    // Tree goes from eldest to youngest, so start at youngest child
    for (var i = path.length - 1; i >= 0; i--) {
      // If youngest child is found in other path, return child
      if (path2.indexOf(path[i]) !== -1) {
        return path[i];
      } else {
        return null;
      }
    }
  }  
}