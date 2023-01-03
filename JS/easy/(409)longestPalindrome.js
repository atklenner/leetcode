/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  // count the number of unique letters
  // add up the even pairs
  // add one to the final count if there is at least one odd amount of a letter
  let total = 0;
  let isThereAnOdd = false;
  let count = s.split("").reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {})
  for (let letter in count) {
    if (count[letter] % 2 === 0) {
      total += count[letter];
    } else {
      total += count[letter] - 1;
      isThereAnOdd = true;
    }
  }
  if (isThereAnOdd) {
    total += 1;
  }
  return total;
};
