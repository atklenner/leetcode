/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let cache = {};
  nums.forEach((num) => {
    if (num in cache) {
      delete cache[num];
    } else {
      cache[num] = true;
    }
  });
  return Object.keys(cache)[0];
};
