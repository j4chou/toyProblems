function reverseVowels(string) {
var vowels = "aeiouAEIOU";
var i = 0;
var j = string.length - 1;
var arr = string.split("");

while (i < j) {
  while (i < j && vowels.indexOf(arr[i]) === -1) {
    i++;
    continue;
  }

  while (j > i && vowels.indexOf(arr[j]) === -1) {
    j--;
    continue;
  }
  // swap vowels
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // continue the loop
  i++;
  j--;
}
return arr.join("");
}