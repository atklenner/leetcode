/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let idx = 0;
  for (let letter of t) {
    if (letter === s[idx]) {
      idx++;
    }
  }
  return idx === s.length
};
