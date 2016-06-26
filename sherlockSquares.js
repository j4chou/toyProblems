// Input: [3,9] Output: 2
const countSqrt = (set) => {
 let count = 0;
 // Square the inputs 
 let start = Math.ceil(Math.sqrt(set[0]));
 let end = Math.sqrt(set[set.length-1]);

 // Loop through squared inputs
 for (let i = start; i <= end; i++) {
  // If a number between the squares multipled by itself and divided by one is zero
  if ( (i*i) % 1 === 0 ) {
    // It is a square, so increase count
    count++;
  }
 }
 console.log(count);
}