// Arrays and Strings

/*
1.1. Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/
function isUnique(string) {
  var obj = {};
  var arr = string.split("")
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return false;  
    } else {
      obj[arr[i]] = true;
    }
  }
  return true;
}

/*
1.3. Given two strings, write a method to decide if one is a permutation of the other.
*/

function isPermutation(str, str2) {
  var strArr = str.split('').sort().join('')
  var strArr2 = str2.split('').sort().join('')
  return strArr === strArr2
}

/*
1.4. Write a method to replace all spaces in a string with '%20'
*/

function replaceSpace(str) {
  return str.replace(/\s/g, '\%20')
}

/*
1.5. Implement a method to perform basic string compression using the counts of repeated characters.
     eg. aabcccccaaa => a2b1c5a3
     If the "compressed" string would not become smaller than the original string, your method should return the original string.
*/
function compress(str) {
  var string = "";
  var count = 1;
  var lastChar = str.charAt(0)
  for (var i = 1; i < str.length; i++) {
    if (str[i] === lastChar) {
      count++;
    } else {
      string += lastChar + count;
      lastChar = str[i];
      count = 1;
    }
  }
  if ((string += lastChar + count).length > str.length) {
    return str;
  } else {
    return string;
  }
}

/*
1.6. Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees,
     Can you do this in place?
*/
// Not in place
function rotateMatrix(matrix) {
  var result = [];
  for (var i = 0; i < matrix[0].length; i++) {
    var copy = [];
    for (var j = matrix.length - 1; j >= 0; j--) {
      copy.push(matrix[j][i]);
    }
    result.push(copy);
  }
  return result;
}


/*
1.7. Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
*/


/*
1.8. Assume you have a method isSubstring that checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation
     of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat")
*/