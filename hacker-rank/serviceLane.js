function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    width = readLine().split(' ');
    width = width.map(Number);
    for(var a0 = 0; a0 < t; a0++){
        var i_temp = readLine().split(' ');
        var i = parseInt(i_temp[0]);
        var j = parseInt(i_temp[1]);
        var minnest = width[i];
      for (i; i < j; i++) {
        var min = (Math.min(width[i],width[i+1]))
        if (minnest > min) {
          minnest = min;
        }
      }
      console.log(minnest)
    }
}