function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
  let alice = 0;
  let bob = 0;
  a0 > b0 ? alice++ : (a0 < b0 ? bob++ : (a0 === b0 ? alice+= 0 : alice+= 0))
  a1 > b1 ? alice++ : (a1 < b1 ? bob++ : (a0 === b0 ? alice+= 0 : alice+= 0))
  a2 > b2 ? alice++ : (a2 < b2 ? bob++: (a0 === b0 ? alice+= 0 : alice+= 0))
  console.log(alice,bob)
}