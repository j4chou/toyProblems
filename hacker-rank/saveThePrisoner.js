function processData(input) {
    //Enter your code here
  var arr = input.split("\n");
  arr.shift();
  arr.forEach(function(test) {
    test = test.split(" ");
    var N = parseInt(test[0]);
    var M = parseInt(test[1]);
    var S = parseInt(test[2]);
    poison(N,M,S);
  });
} 
function poison(n,m,s) {
  var r = (m+s-1) % n
  if (r === 0) {
    console.log(n)
  } else {
    console.log(r)
  }
}
