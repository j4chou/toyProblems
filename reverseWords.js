var string = "Welcome to this Javascript Guide!";

var reverseChars = reverse(string,"");
// output; !ediuG tpircsavaJ siht ot emocleW

var reverseWords = reverse(reverseChars, " ");
// final output: emocleW ot siht tpircsavaJ !ediuG

function reverse(string, separator) {
  return string.split(separator).reverse().join(separator);
}
