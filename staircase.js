function staircase(n) {
  // Outer loop for the rows
  for (var i = 1; i <= n; i++) {
    var spaces = n - i;
    var stairs = n - spaces;
    var str = "";
    // Spaces will decrease as i increases
    for (var j = 0; j < spaces; j++) {
      str += " ";
    }
    // Hashtags will increase as stairs increases
    for (var k = 0; k < stairs; k++) {
      str += "#";
    }
    console.log(str);
  }
}