function processData(input) {
    //Enter your code here
  let arr = input.splice(1);
  arr.forEach(function(i) {
    var result = i.split("")
    .map((letter) => { return letter.charCodeAt(); })
    .map((letter,i, arr) => {
      return Math.abs(letter - arr[i+1])
    })
    .filter((num) => { return Number.isInteger(num) })
    result.join("") === result.reverse().join("") ? console.log('Funny') : console.log('Not Funny')
  })
} 