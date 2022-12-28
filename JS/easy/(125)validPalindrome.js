/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let ltr = s.toLowerCase().replace(/[\W_]/g, "");
  let rtl = ltr.split("").reverse().join("");
  return ltr === rtl;
};
