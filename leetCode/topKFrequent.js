var topKFrequent = function(nums, k) {
    let box = {};
    let store = [];
    let results = [];
    for (var i = 0; i < nums.length; i++) {
        box[nums[i]] = box[nums[i]] + 1 || 1;
    }
    for (var key in box) {
        store.push([key, box[key]]);
    }
    store.sort(function(a,b) {
       return b[1] - a[1]; 
    });
    for (let j = 0; j < k; j++) {
        results.push(parseInt(store[j][0]))
    }
    return results;  
};