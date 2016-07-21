var intersection = function(nums1, nums2) {
    let results = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
            if (results.indexOf(nums1[i]) === -1) {
                results.push(nums1[i])
            }
        }
    }
  return results;
};