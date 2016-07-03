function processData(input) {
    //Enter your code here
 var str = input;
 var str2 = removePairs(str);
 
 while (str !== str2) {
   str = str2;
   str2 = removePairs(str);
 }

 if (str.length) {
  console.log(str);
 } else {
  console.log("Empty String")
 }
}

function removePairs(string) {
 string = string.split("");
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i+1]) {
      string.splice(i, 2)
    } 
  }
  return string.join("");
}