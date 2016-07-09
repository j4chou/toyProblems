/*
Define a repeatify function on the String object. The function accepts an integer that specifies 
how many times the string has to be repeated. The function returns the string repeated the number of times specified. 
*/

String.prototype.repeatify = String.prototype.repeatify || 
  function(n) {
    var results = "";
    for (var i = 0; i < n; i++) {
     results += this;
   }
  return results;
  }