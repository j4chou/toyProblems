function processData(input) {
    //Enter your code here
  var cases = input.split("\n");
  cases.shift();
  cases.forEach(function(item) {
    reduceStr(item);
  });
}
function reduceStr(inpt) {
  var letters = inpt.split("");
  var points = [];
  var reduce = 0;
  var mid;
  letters.forEach(function(item) {
    points.push(item.charCodeAt(0));
  });

  if (points.length % 2 === 0) {
    mid = points.length/2;
  } else {
    mid = Math.floor(points.length/2);
  }

    for (var j = 0; j < mid; j++) {
      while(points[j] !== points[points.length-j-1]) {
        if (points[j] > points[points.length-j-1]) {
          points[j]--;
          reduce++;
        } else if (points[j] < points[points.length-j-1]) {
          points[points.length-j-1]--;
          reduce++;
        }
      }
    }
   console.log(reduce);
}