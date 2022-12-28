/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  // map the array into an array of row "strengths"
  let strengths = mat.map((arr) => arr.reduce((acc, cur) => acc + cur), 0);
  // loop from 1 to k
  let results = [];
  for (let i = 1; i <= k; i++) {
    let min = 1000;
    let index = 0;
    for (let j = 0; j < strengths.length; j++) {
      if (strengths[j] < min && !results.includes(j)) {
        min = strengths[j];
        index = j;
      }
    }
    results.push(index);
  }
  // find the smallest value in the strengths array and add it's index into the result
  // check if that index is not already in the result, if it is keep going
  return results;
};
