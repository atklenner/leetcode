/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // convert n into a String
  let string = n.toString(2);
  let count = 0;
  // loop through string
  for (let i = 0; i < string.length; i++) {
    // count the number of 1's
    if (string[i] === "1") count++;
  }
  // return the count
  return count;
};
