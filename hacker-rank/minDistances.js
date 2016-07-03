function main() {
    var n = parseInt(readLine());
    A = readLine().split(' ');
    A = A.map(Number);
    minDist(A);

}
function minDist(arr) {
  var min = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        min.push(Math.abs(i-j))
      }
    }
  }
  if (min.length) {
    console.log(Math.min.apply(null, min));
  } else {
    console.log(-1);
  }
}