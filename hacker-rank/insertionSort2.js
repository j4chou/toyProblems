function processData(input) {
    //Enter your code here
  let data = input.split("\n");
  let arr = data[1].split(" ").map( v => parseInt(v));
  sortArr(arr);
} 

const sortArr = (array) => {
  for (let i = 1; i <= array.length-1; i++) {
   let j = i;
    while ( j > 0 && array[j] < array[j-1]) {
        let temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        j--;
    }
    console.log(...array)
  }
}