function processData(input) {
    //Enter your code here
  let indices = input.split("\n")
  let nkq = indices.shift().split(" ").map( x => x = parseInt(x))
  let arr = indices.shift().split(" ").map( x => x = parseInt(x))
  indices = indices.map( x => x = parseInt(x))
  let count = 0;
  if (nkq[1] % arr.length !== 0) {
     while (count < nkq[1]) {
      arr.unshift(arr.pop());
      count++;
     }
  }
  for (let i = 0; i < indices.length; i++) {
    console.log(arr[indices[i]]);
  }
}
