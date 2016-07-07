function main() {
    var n = parseInt(readLine());
    var B = readLine();
    var array = B.split("");
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] == 0 && array[i+1] == 1 && array[i+2] == 0) {
        array.splice(i,3);
        count++;
        i = i - 1;
      }
    }
console.log(count);
}