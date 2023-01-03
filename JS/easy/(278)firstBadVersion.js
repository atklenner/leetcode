/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
    * @param {integer} n Total versions
    * @return {integer} The first bad version
    */
  return function(n) {
    let low = 1;
    let high = n;
    while (low < high) {
      let middle = Math.floor((high - low) / 2) + low;
      if (isBadVersion(middle)) {
        high = middle;
      } else {
        low = middle + 1;
      }
    }
    return low;
  };
};
