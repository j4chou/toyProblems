var findTheDifference = function(s, t) {
    let sObj = {};
    let tObj = {};
    for (var i = 0; i < s.length; i++) {
        sObj[s[i]] = sObj[s[i]] + 1 || 1;
    }
    for (var j = 0; j < t.length; j++) {
        tObj[t[j]] = tObj[t[j]] + 1 || 1;
    }
    for (var key in tObj) {
        if (tObj[key] !== sObj[key]) {
            return key;
        }
    }
};