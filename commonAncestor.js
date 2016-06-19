Tree.prototype.getAncestorPath = function(child) {
  var path = [];

  function recurse(tree) {
    if (tree === child) {
      path.push(tree);
    }
    if (tree.isDescendant(child)) {
      path.push(tree);
    }
    for (var i = 0; i < tree.children.length; i++) {
      recurse(tree.children[i]);
    }
  }
  recurse(this);
  return path.length ? path : null;
}


Tree.prototype.getClosestCommonAncestor = function(tree,tree2) {
  var path = this.getAncestorPath(tree);
  var path2 = this.getAncestorPath(tree2);

  if (path && path2) {
    // tree goes from eldest to youngest, so start at youngest child
    for (var i = path.length - 1; i >= 0; i--) {
      if (path2.indexOf(path[i]) !== -1) {
        return path[i];
      } else {
        return null;
      }
    }
  }  
}