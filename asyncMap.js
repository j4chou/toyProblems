function asyncMap(tasks, callback) {
  var results = [];
  var count = 0;
  tasks.forEach(function(task, index) {
    // Invoke task
    task(function(val) {
      // Store result in results array according to index
      results[index] = val;
      count++;

      if (count === tasks.length) {
        callback(results);
      }
    })
  })
}

/* Implement using promises */

function asyncMap(tasks, callback) {
  var results = [];
  tasks.forEach(function(task) {
    var promise = new Promise(function(resolve, reject) {
      task(resolve);
    });
    results.push(promise);
  })
  Promise.all(results).then(function(result) { 
    callback(result);
  });
}