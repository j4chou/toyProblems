function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var count = 0;
    var k1 = x1 + (v1 * count);
    var k2 = x2 + (v2 * count);
    
  if (x2 > x1 && v2 >= v1) {
    console.log("NO")
  } else if (x1 > x2 && v1 >= v2) {
    console.log("NO")
  } else {
    if (k2 > k1) {
      while (k2 > k1) {
      k1 = x1 + (v1 * count);
      k2 = x2 + (v2 * count);
      count++;
      } 
    } else if (k1 > k2) {
      while (k1 > k2) {
      k1 = x1 + (v1 * count);
      k2 = x2 + (v2 * count);
      count++;
     }  
    }
    if (k1 === k2) {
    console.log("YES")
    } else {
    console.log("NO")
   }  
  }
}