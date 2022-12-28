/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // keep a cache of the values
  let cache = {};
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // check if a new value from nums is already in the cache
    // if true return true
    if (cache[nums[i]]) return true;
    // if false, add value to cache
    cache[nums[i]] = true;
  }
  // after loop, return false
  return false;
};
