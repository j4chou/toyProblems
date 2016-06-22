var makeHashTable = function(){
var table = {};
var storage = [];
var storageLimit = 1000;

table.insert = function(key, value){
var index = getIndexBelowMaxForKey(key, storageLimit);
storage[index] = storage[index] || [];
var bucket = storage[index];
// Create a bucket to store key and values
for (var i = 0; i < bucket.length; i++) {
  // If key exists
if (bucket[i][0] === key) {
  // Replace value
    bucket[i][1] = value;
    return bucket[i][1];
} 
}
// Create tuple for other keys and values
bucket.push([key,value]);
};

table.retrieve = function(key){
var index = getIndexBelowMaxForKey(key, storageLimit);
storage[index] = storage[index] || [];
var bucket = storage[index];
for (var i = 0; i < bucket.length; i++) {
  // Iterate through bucket and search for key
  if (bucket[i][0] === key) {
    return bucket[i][1];
  } 
}
return null;
};

table.remove = function(key){
var index = getIndexBelowMaxForKey(key, storageLimit);
storage[index] = storage[index] || [];
var bucket = storage[index];
for (var i = 0; i < bucket.length; i++) {
if (bucket[i][0] === key) {
  // Remove the tuple
  bucket.splice(i,1);
}
}
};
return table;  
};


function resize(newSize) {
  var result = {};
  var copy = storage;
  storageLimit = newSize;
  size = 0;

  copy.forEach(function(bucket) {
    bucket.forEach(function(value) {
      result.insert(value[0], value[1]);
    });
  });
}


function getIndexBelowMaxForKey(str, max){
var hash = 0;
for (var i = 0; i < str.length; i++) {
hash = (hash<<5) + hash + str.charCodeAt(i);
hash = hash & hash; // Convert to 32bit integer
hash = Math.abs(hash);
}
return hash % max;
};
