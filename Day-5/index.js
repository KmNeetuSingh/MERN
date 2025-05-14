function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}
// Flatten Array On Level deep 
function flattenOneLevel(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
// Find the longest Word in a sentence 
function findLongestWord(sentence) {
  let word = '';
  let longest = '';

  for (let i = 0; i <= sentence.length; i++) {
    const char = sentence[i] || ' '; // Handle last word
    if (char !== ' ') {
      word += char;
    } else {
      if (word.length > longest.length) {
        longest = word;
      }
      word = '';
    }
  }

  return longest;
}
// Captialize first letter of every word
    function capitalizeWords(sentence) {
  let result = '';
  let capitalize = true;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (capitalize && char !== ' ') {
      result += char.toUpperCase();
      capitalize = false;
    } else {
      result += char;
    }

    if (char === ' ') {
      capitalize = true;
    }
  }

  return result;
}
// Return common elemnt from two arrays
function getCommonElements(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // Check for duplicates
        let alreadyInResult = false;
        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr1[i]) {
            alreadyInResult = true;
            break;
          }
        }
        if (!alreadyInResult) {
          result.push(arr1[i]);
        }
      }
    }
  }

  return result;
}
