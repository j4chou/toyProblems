// 2.) Given a mixture of arrays and objects, test the values with a callback input and return the values
const testline = [1, [3, [2, [2, [3]]]], {4: 4}, [3, 2, [4, 2]]]
const fn = (x) => { return x > 2 }
//tester (testline, (x) => { return x > 2 }) // outputs: [ 3, 3, 4, 3, 4 ]

let results = [];
const tester = (input, cb) => {

    for (var i = 0; i < input.length; i++) {
      if (Array.isArray(input[i])) {
        tester(input[i], cb)
      } else if (Object.prototype.toString.call(input[i]) === '[object Object]') {
        let obj = input[i];
        for (var key in obj) {
          tester(obj[key], cb);
        }
        if (cb(obj[key])) {
          results.push(obj[key])
        }
      } else {
          if (cb(input[i])) {
          results.push(input[i]);
        }
      }
    }
 return results;
}

console.log(tester(testline,fn))