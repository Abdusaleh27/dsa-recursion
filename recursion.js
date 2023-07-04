/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums.shift() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  let currentWord = words.shift().length;
  let lengthOfRest = longest(words);
  if (currentWord < lengthOfRest) return lengthOfRest;
  return currentWord;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str === "") return "";
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  let sLength = str.length;
  return (
    str[0] === str[sLength - 1] && isPalindrome(str.substring(1, sLength - 1))
  );
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  let temp = [...arr];
  if (temp.length === 0) return;

  let first = temp.shift();
  if (first === val) return 0;
  let sum = 1 + findIndex(temp, val);
  if (sum) return sum;
  return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + revString(str.substring(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  let values = Object.values(obj);
  for (let val of values) {
    if (typeof val === "string") {
      strings.push(val);
    } else if (typeof val === "object") {
      let rest = gatherStrings(val);
      strings = [...strings, ...rest];
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) {
    return;
  }
  let middle = Math.floor(arr.length / 2);
  let currentVal = arr[middle];
  if (currentVal === val) {
    if (arr.length === 1) {
      return 1;
    }
    return middle + 1;
  } else if (currentVal > val) {
    let recurred = binarySearch(arr.slice(0, middle), val);
    middle =
      !Object.is(recurred, NaN) && recurred !== -1 ? middle - recurred : NaN;
  } else if (currentVal < val) {
    let recurred = binarySearch(arr.slice(middle + 1), val);
    middle =
      !Object.is(recurred, NaN) && recurred !== -1 ? middle + recurred : NaN;
  }
  if (!Object.is(middle, NaN)) {
    return middle;
  }
  if (!middle) return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
