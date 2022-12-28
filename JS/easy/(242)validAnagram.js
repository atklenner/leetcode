/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let splitSort1 = s.split("").sort().join("");
  let splitSort2 = t.split("").sort().join("");
  return splitSort1 === splitSort2;
};
