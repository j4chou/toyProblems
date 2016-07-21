function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    let count = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i+2] === 1 && c[i+1] === 0) {
      count += 2;
      if (c.length > 1) { c.splice(i,3); }
      i--;
    } else if (c[i+2] === 0) {
      count++;
      if (c.length > 1) { c.splice(i,2); }
      i--;
    } else if (c[i+1] === 1) {
      count++;
      if (i !== c.length-1 && c.length > 1) {
        c.splice(i,1)
      }
    } else if (c[i+1] === 0) {
      count++;
    }
  }
  console.log(count);
}

/* shorter solution */
function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
  let jumps = 0;
  let i = 0;
  while ( i < c.length-1) {
    if ( c[i+1] === 1 || (c[i+1] === 0 && c[i+2] === 0)) {
      jumps++;
      i+=2;
    } else {
      jumps++;
      i++;
    }
  }
  console.log(jumps)
}