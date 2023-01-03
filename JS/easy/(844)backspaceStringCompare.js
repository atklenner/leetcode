/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sString = "";
  let tString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sString = sString.slice(0, -1);
    } else {
      sString += s[i]
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tString = tString.slice(0, -1);
    } else {
      tString += t[i]
    }
  }
  return sString === tString;
};
