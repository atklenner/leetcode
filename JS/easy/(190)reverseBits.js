/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let flip = n.toString(2).split("").reverse().join("");
  return parseInt(flip.concat("0".repeat(32 - flip.length)), 2);
};
