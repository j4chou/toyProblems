function processData(input) {
    //Enter your code here
  let data = input.split("\n");
  let arr = data[1].split(" ").map( v => parseInt(v));
  sortArr(arr);
} 

const sortArr = (array) => {
  let val = array.pop();
  for (let i = array.length-1; i >= -1; i--) {
    if (val < array[i]) {
      array[i+1] = array[i];
      console.log(...array);
    } else {
      array[i+1] = val;
      console.log(...array);
      break;
    }
  }
}
